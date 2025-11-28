import { defineExtensionMessaging } from '@webext-core/messaging';

interface ResponseType {
  getStringLength(s: string): number;
}

interface RequestType { }

export const { sendMessage, onMessage } = defineExtensionMessaging<ResponseType & RequestType>();
