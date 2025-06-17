/**
 * # 标准的 `JSON` 数据
 */
export interface Json<V = any> {
    /**
     * ### `JSON` 的键
     */
    [x: string]: V
}

/**
 * # 类包装
 */
export type ClassConstructor<T = any> = {
    new (...args: any[]): T
}

export type EnumKey = string | number | boolean

// iframe 动作字典
export interface IframeActionDictionary<K extends EnumKey = EnumKey> {
    // 字典的值
    key: K
    // 字典的显示标题
    label: string
    // 是否被禁用
    disabled: boolean
    // 权限列表
    permissionList: string[]
    // 响应最大次数
    maxCount: number
    // 响应次数
    count: number
}
