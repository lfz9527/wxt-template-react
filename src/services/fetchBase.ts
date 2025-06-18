export type RequestConfig<D = any> = {
    url?: string
    baseURL?: string
    method?: string
    params?: Record<string, any>
    timeout?: number
    headers?: HeadersInit
    data?: D
    cancelToken?: string
    isSSE?: boolean
    requestType?: 'json' | 'form' | 'text' | 'blob'
} & Omit<RequestInit, 'headers' | 'body'>

export interface ResponseError {
    status?: number
    errMsg: string
    code?: any
}

const isFullUrl = (url: string): boolean => {
    return /^(https?:\/\/|\/\/)/.test(url)
}

// 默认错误信息：请求失败，请稍后重试
const defaultCodeMsg = 'Request failed, please try again later'

/**
 * 创建错误信息
 * @param status
 * @param message
 * @returns
 */
const createErrorMessage = (status: number, message?: string): string => {
    switch (status) {
        case 404:
            // 请求的资源不存在
            return '404 Not Found'

        case 500:
            // 服务器内部错误
            return 'Internal server error'
        case 502:
            // 网关错误
            return 'Bad gateway'
        case 503:
            // 服务不可用
            return 'Service unavailable'
        case 504:
            // 网关超时
            return 'Gateway timeout'
        case 10001:
            // 请求被取消
            return 'Request was cancelled'
        default:
            return message ?? defaultCodeMsg
    }
}

class Http {
    static readonly BASE_URL = import.meta.env.WXT_BASE_URL
    static readonly TIMEOUT = 10000 // 10 seconds
    // 存储所有进行中的请求
    private pendingRequests: Map<string, AbortController> = new Map()

    /**
     * 取消指定请求
     * @param cancelToken 请求标识
     */
    public cancelRequest(cancelToken: string) {
        const controller = this.pendingRequests.get(cancelToken)
        if (controller) {
            controller.abort()
            this.pendingRequests.delete(cancelToken)
        }
    }

    /**
     * 取消所有请求
     */
    public cancelAllRequests() {
        this.pendingRequests.forEach((controller) => {
            controller.abort()
        })
        this.pendingRequests.clear()
    }

    /**
     * 创建新的请求控制器
     * @param cancelToken 请求标识
     */
    private createController(cancelToken: string = ''): AbortController {
        // 如果存在相同标识的请求，先取消它
        if (cancelToken) {
            this.cancelRequest(cancelToken)
        }

        const controller = new AbortController()
        if (cancelToken) {
            this.pendingRequests.set(cancelToken, controller)
        }
        return controller
    }

    public async request<T = any, D = any>(
        config: RequestConfig<D>
    ): Promise<[ResponseError | null, T | null]> {
        let finalError: ResponseError | null = null
        let success: T | null = null

        const {
            url = '',
            baseURL = Http.BASE_URL,
            method = 'GET',
            params = {},
            timeout = 12000,
            headers = {},
            data,
            cancelToken = '',
            isSSE = false,
            ...rest
        } = config

        // 如果是全路径URL，则不使用baseURL
        const fetchUrl = isFullUrl(url) ? url : `${baseURL}${url}`
        const queryString = params ? `?${new URLSearchParams(params)}` : ''

        const fetchHeaders: RequestConfig['headers'] = {
            'Content-Type': 'application/json',
            ...headers
        }

        // 请求控制器
        const controller = this.createController(cancelToken)

        let status = 10086
        let code = -1
        let timeoutId: ReturnType<typeof setTimeout> | null = null

        try {
            // 请求超时控制
            const timeoutPromise = new Promise<Response>((_, reject) => {
                timeoutId = setTimeout(() => {
                    controller.abort()
                    status = 504
                    reject(new Error(createErrorMessage(status))) // 网关超时
                }, timeout)
            })

            const options: RequestConfig = {
                headers: {...fetchHeaders},
                ...(data ? {body: JSON.stringify(data)} : {}),
                signal: controller.signal,
                ...rest
            }
            const urlWithParams = `${fetchUrl}${queryString}`
            const fetchPromise = await fetch(urlWithParams, options)

            const response = await Promise.race([fetchPromise, timeoutPromise])

            if (response.status) {
                status = response.status
            }
            if (!response.ok) {
                throw new Error(createErrorMessage(status))
            }
            if (isSSE) {
                success = response.body as unknown as T
            } else {
                success = (await response.json()) as T
            }
        } catch (error: any) {
            const errMsg = error.message || defaultCodeMsg
            finalError = {
                status,
                errMsg,
                code
            }

            if (controller.signal.aborted) {
                finalError.status = 10001
                finalError.errMsg = createErrorMessage(status)
            }
        } finally {
            timeoutId && clearTimeout(timeoutId)
            if (cancelToken) {
                this.pendingRequests.delete(cancelToken)
            }
        }

        return [finalError, success]
    }
}

export const http = new Http()
