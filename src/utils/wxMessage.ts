// 消息类型
export type MessageRequest = {
    type: string
    payload?: any
}

// 响应类型
export type MessageResponse<T = any> = {
    code: number
    data?: T
    errorMsg?: string
}

export type MessageHandler = (
    request: MessageRequest
) => Promise<MessageResponse>

const DEFAULT_TIMEOUT = 5000

/**
 * 自动处理 async 函数并返回 true
 */
export const createAsyncMessageHandler = (handler: MessageHandler) => {
    browser.runtime.onMessage.addListener(
        (request: MessageRequest, sender, sendResponse) => {
            handler(request)
                .then((response) => {
                    console.debug('处理消息:', request.type, response)
                    // 确保响应格式正确
                    sendResponse(response)
                })
                .catch((error) => {
                    console.error('消息处理异常:', error)
                    sendResponse({
                        code: -1,
                        errorMsg: error.message || '未知错误'
                    })
                })

            // 始终返回 true，以支持异步响应
            return true
        }
    )
}

/**
 * 发送消息给 background script
 */
export const sendMessage = (
    message: MessageRequest,
    timeout: number = DEFAULT_TIMEOUT
): Promise<MessageResponse> => {
    return new Promise((resolve, reject) => {
        const timer = setTimeout(() => {
            reject(new Error(`消息超时：${JSON.stringify(message)}`))
        }, timeout)

        browser.runtime.sendMessage(message, (response) => {
            clearTimeout(timer)
            if (browser.runtime.lastError) {
                reject({
                    code: -1,
                    errorMsg: browser.runtime.lastError.message
                } as MessageResponse)
            } else {
                resolve(response as MessageResponse)
            }
        })
    })
}

/**
 * 向指定的 tab 发送消息
 * @param current 是否发送到当前激活的标签页
 * @param message 消息体
 * @param timeout 超时时间（毫秒）
 * @returns Promise<MessageResponse<T>>
 */
export const sendMessageToTab = (
    current: boolean,
    message: MessageRequest,
    timeout: number = DEFAULT_TIMEOUT
): Promise<MessageResponse> => {
    return new Promise(async (resolve, reject) => {
        let isResolved = false

        // 设置超时
        const timer = setTimeout(() => {
            if (!isResolved) {
                reject({
                    code: -1,
                    errorMsg: `消息超时：${JSON.stringify(message)}`
                } as MessageResponse)
            }
        }, timeout)

        if (current) {
            const currentTabs = await browser.tabs.query({
                active: true,
                currentWindow: true
            })
            const currentTab = currentTabs?.[0]
            if (currentTab?.id) {
                try {
                    const res = await browser.tabs.sendMessage(
                        currentTab?.id,
                        message
                    )
                    resolve(res)
                } catch (error: any) {
                    console.error('browser.tabs.sendMessage__error', error)
                    reject?.({
                        code: -1,
                        errorMsg:
                            error.message || 'browser.tabs.sendMessage__error'
                    } as MessageResponse)
                } finally {
                    isResolved = true
                    clearTimeout(timer)
                }
            }
            return
        }

        const allTabs = await browser.tabs.query({currentWindow: true})
        const filteredTabs = allTabs.filter((tab) => tab?.id)
        filteredTabs.forEach(async (tab) => {
            try {
                const res = await browser.tabs.sendMessage(tab.id!, message)
                resolve(res)
            } catch (error: any) {
                console.error('browser.tabs.sendMessage__error', error)
                reject?.({
                    code: -1,
                    errorMsg: error.message || 'browser.tabs.sendMessage__error'
                } as MessageResponse)
            }
        })
    })
}
