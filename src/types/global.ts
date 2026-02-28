
export type anyObject<V = any> = Record<string, V>

export type Response<T = unknown> = {
  message?: string
  data?: T
  code: number
}