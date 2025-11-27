import uid from 'tiny-uid'

export type EndpointFingerprint = `uid::${string}`

// 创建指纹
export const createFingerprint = (): EndpointFingerprint => `uid::${uid(7)}`