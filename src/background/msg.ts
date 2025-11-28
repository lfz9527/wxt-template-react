import { defineExtensionMessaging } from '@webext-core/messaging';
import { getAllTabs } from '@/utils/common'

interface ResponseType {
  getStringLength(s: string): number;
}

interface RequestType { }

export const { sendMessage, onMessage } = defineExtensionMessaging<ResponseType & RequestType>();


export const sendAllTabs = async (type: keyof ResponseType, data: Record<string, any> = {}) => {
  const tabs = await getAllTabs()
  const tabIds = tabs.map(t => t.id)



  sendMessage(type, tabIds)

}