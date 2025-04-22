// 标签页事件
export type globalType = 'global'


export type FetchType = 'get' | 'post'

export type SendBrowserMessageType = {
  type: string,
  data: Record<string, any>
}

export type FetchResponse = {
  error?: any
  data?: Record<string, any>
}