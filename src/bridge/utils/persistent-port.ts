import { createFingerprint } from './endpoint-fingerprint'
import type { Port, InternalMessage } from '@/bridge/types'
import { QueuedMessage } from './types'

export const createPersistentPort = (name = '') => {
  let undeliveredQueue: ReadonlyArray<QueuedMessage> = []
  const fingerprint = createFingerprint()
  const onMessageListeners = new Set<
    (message: InternalMessage, port: Port) => void
  >()
  const onFailureListeners = new Set<(message: InternalMessage) => void>()
  let port: Port

  const handleMessage = () => { }
  // 创建链接
  const connect = () => {
    port = browser.runtime.connect({
      name: JSON.stringify({
        endpointName: name,
        fingerprint,
      }),
    })
    port.onMessage.addListener(handleMessage)
    // V3 版本 使用的是 service worker 会被随时休眠，休眠时自动重连
    port.onDisconnect.addListener(connect)
  }
  connect()


  return {
    onFailure(cb: (message: InternalMessage) => void) {
      onFailureListeners.add(cb)
    },
    onMessage(cb: (message: InternalMessage) => void): void {
      onMessageListeners.add(cb)
    },
    postMessage(message: any): void {
    },
  }
}