import { useState, useEffect, useCallback } from 'react'
import './index.less'

interface MessageItem {
  id: string;
  content: string;
  type?: 'info' | 'success' | 'warning' | 'error' | 'loading';
  duration?: number; // 添加 duration 参数
}

// 创建一个事件中心来管理消息
type MessageAPI = {
  info: (content: string, duration?: number) => MessageItem['id'];
  success: (content: string, duration?: number) => MessageItem['id'];
  warning: (content: string, duration?: number) => MessageItem['id'];
  error: (content: string, duration?: number) => MessageItem['id'];
  loading: (content: string, duration?: number) => MessageItem['id'];
  close: (messageId: MessageItem['id']) => void; // 添加关闭方法
}


let messageInstance: ((message: MessageItem) => void) | null = null;
let closeInstance: ((messageId: MessageItem['id']) => void) | null = null;

// 创建消息API
export const message: MessageAPI = {
  info: (content, duration) => showMessage(content, 'info', duration),
  success: (content, duration) => showMessage(content, 'success', duration),
  warning: (content, duration) => showMessage(content, 'warning', duration),
  error: (content, duration) => showMessage(content, 'error', duration),
  loading: (content, duration) => showMessage(content, 'loading', duration),
  close: (messageId) => closeInstance?.(messageId)

}


const showMessage = (content: string, type: MessageItem['type'] = 'info', duration: number = 3000) => {
  if (messageInstance) {
    const id = crypto.randomUUID() as MessageItem['id']
    messageInstance({
      id,
      content,
      type,
      duration,
    });
    return id;
  }
  return '0'
};



const Message = () => {
  const [messageList, setMessageList] = useState<MessageItem[]>([])

  const closeMessage = useCallback((messageId: number | string) => {
    setMessageList(prev => prev.filter(msg => msg.id !== messageId));
  }, []);

  const addMessage = useCallback((message: MessageItem) => {
    setMessageList(prev => [...prev, message]);

    // 只有当 duration 不为 0 时才自动关闭
    if (message.duration && message.duration >= 0) {
      setTimeout(() => {
        closeMessage(message.id);
      }, message.duration || 3000);
    }
  }, []);

  useEffect(() => {
    messageInstance = addMessage;
    closeInstance = closeMessage;
    return () => {
      messageInstance = null;
      closeInstance = null;
    };
  }, [addMessage]);

  console.log(messageList, 123);



  return (
    <div className="message-container">
      {messageList.map((message) => (
        <div key={message.id} className={`message-item ${message.type || 'info'}`}>
          {message.type === 'loading' && <span className="loading-icon"></span>}
          {message.content}
        </div>
      ))}
    </div>
  );
}

export default Message;