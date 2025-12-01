import { defineExtensionMessaging } from '@webext-core/messaging';
import { anyObject } from '@/types'

type MessageFn<T = anyObject, R = anyObject> = (arg?: T) => R | void;

// 需要响应的通信
interface ResponseType {
  getStringLength: MessageFn
}

// 无需响应的通信
interface RequestType { }

type Action = ResponseType & RequestType
const define = defineExtensionMessaging<Action>();



export const onMessage = (type: keyof Action, cb: Parameters<typeof define.onMessage>[1]) => {
  return define.onMessage(type, cb)
}

export const sendMessage = (
  type: keyof Action,
  data: Parameters<typeof define.sendMessage>[1],
  arg?: Parameters<typeof define.sendMessage>[2]
) => {
  return define.sendMessage(type, data, arg)
}


export const sendAllTabs = async (type: keyof ResponseType, data: Parameters<typeof define.sendMessage>[1]) => {
  const tabs = await getAllTabs()
  const tabIds = tabs.map(t => t.id).filter(Boolean)
  tabIds.forEach(id => {
    sendMessage(type, data, id)
  })
}