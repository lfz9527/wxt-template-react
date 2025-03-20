import { FetchType, SendBrowserMessageType, FetchResponse } from '~/entrypoints/types'


type SendBrowserMsgType<T = any> = {
  option: SendBrowserMessageType,
  responseCallback?: (response: T) => void
}
// 向 background 发送消息
export const sendBrowserMessage = <T = any>({ option, responseCallback = () => { } }: SendBrowserMsgType<T>) => {
  browser.runtime.sendMessage({ ...option }, responseCallback);
}

// 接收 background 向插件发送的消息
export const addBrowserMessage = (callback: (...args: any[]) => void) => {
  browser.runtime.onMessage.addListener((message) => {
    callback(message)
  });
}

type Option = {
  method?: FetchType
  data: Record<string, any>
  header?: Record<string, any>
}

// 接口请求
export const fetchApi = (url: string, option: Option) => {
  return new Promise((resolve, reject) => {
    const { method = 'get', data = {}, header = {} } = option
    sendBrowserMessage({
      option: {
        type: method,
        data: {
          url,
          data,
          header
        }
      },
      responseCallback: (response: FetchResponse) => {
        if (response.error) {
          reject(response)
        } else {
          resolve(response)
        }
      }
    });
  })

}