import {http, ResponseError} from './fetchBase'
import type {RequestConfig} from './fetchBase'

interface ServiceConfig extends RequestConfig {
    errorCallback?: {
        onError?: (error: ResponseError) => void
        unAuthorized?: (error: ResponseError) => void
    }
}

class Service {
    public cancelRequest(cancelToken: string) {
        http.cancelRequest(cancelToken)
    }
    public cancelAllRequests() {
        http.cancelAllRequests()
    }
    private handleError(
        error: ResponseError,
        errorCallback?: ServiceConfig['errorCallback']
    ) {
        const {onError, unAuthorized} = errorCallback || {}
        switch (error.code) {
            case -1:
                onError?.(error)
                break
            case 10402:
                unAuthorized?.(error)
                break
            default:
                onError?.(error)
        }
    }

    async request<T = any>(
        url: string,
        config: ServiceConfig = {}
    ): Promise<T> {
        const {errorCallback, ...restConfig} = config
        const [error, success] = await http.request<T>({
            url,
            method: 'GET',
            ...restConfig
        })
        if (error) {
            if (errorCallback) {
                this.handleError(error, errorCallback)
            }
            throw error
        }
        return success as T
    }
}

export const service = new Service()
export const request = service.request.bind(service)
