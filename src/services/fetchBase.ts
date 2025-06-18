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

// 常见系统错误码映射
export const codeMsgMap: Record<number, string> = {
    // 请求的资源不存在
    404: 'The requested resource does not exist',
    // 服务器内部错误
    500: 'Internal server error',
    // 网关错误
    502: 'Bad gateway',
    // 服务不可用
    503: 'Service unavailable',
    // 网关超时
    504: 'Gateway timeout',
    // 自定义系统错误码
    10086: defaultCodeMsg
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
        let error: ResponseError | null = null
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

        const fetchHeaders: HeadersInit = {
            'Content-Type': 'application/json',
            ...headers
        }

        // 请求控制器
        const controller = this.createController(cancelToken)

        let status,
            code = -1

        try {
            // 请求超时控制
            const timeoutId = setTimeout(() => {
                status = 504
                controller.abort(
                    new DOMException(codeMsgMap[status], 'TimeoutError')
                )
            }, timeout)

            const options: RequestConfig = {
                headers: {...fetchHeaders},
                ...(data ? {body: JSON.stringify(data)} : {}),
                signal: controller.signal,
                ...rest
            }
            const urlWithParams = `${fetchUrl}${queryString}`
            const response = await fetch(urlWithParams, options)
            clearTimeout(timeoutId)

            if (!response.ok) {
                status = response.status || 10086
                throw new Error(codeMsgMap[status])
            }
            if (isSSE) {
                success = response.body as unknown as T
            } else {
                success = (await response.json()) as T
            }
        } catch (error: any) {
            error = {
                status,
                errMsg: error.message || defaultCodeMsg,
                code
            }
        }

        return [error, success]
    }
}

export const http = new Http()
