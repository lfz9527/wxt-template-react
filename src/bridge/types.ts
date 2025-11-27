// 运行时上下文
export type RuntimeCtx = 'siderPanel' | 'background' | 'content-script' | 'window'

export type anyObject = Record<string, any>
export type Port = Browser.runtime.Port

export interface Endpoint {
  // 上下文
  context: RuntimeCtx
  tabId: number
  // 一个 Web 页面的具体框架 (frame) 的唯一标识。理解它非常重要，尤其是在多 frame 的页面里（iframe、嵌套页面）
  frameId?: number
}

export interface InternalMessage {
  // 来源
  origin: Endpoint
  // 目标
  destination: Endpoint
  // 通信id
  transactionId: string
  // 消息在传递过程中经过的 中间端点 ID 列表。每经过一个节点，节点的 ID 会被 push 到数组里。这样可以追踪消息路径、防止循环转发、做调试或路由优化
  hops: string[]
  // 消息ID 用于请求/响应匹配
  messageID: string
  // 消息类型
  messageType: 'message' | 'reply'
  // 错误
  err?: anyObject
  // 载荷
  data?: anyObject | void
  timestamp: number
}