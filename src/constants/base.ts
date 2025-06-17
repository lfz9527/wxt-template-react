import {IframeActionDictionary, EnumKey, ClassConstructor, Json} from '@/types'

export class AirEnum<K extends EnumKey = string>
    implements IframeActionDictionary<K>
{
    // 枚举的值
    key: K
    // 枚举的描述
    label!: string
    // 权限列表
    permissionList!: string[]
    // 响应最大次数
    maxCount: number = -1
    // 是否被禁用
    disabled: boolean = false
    // 响应次数
    count: number = 0

    constructor(
        key: K,
        label: string,
        permissionList: string[] = [],
        maxCount: number = -1,
        disabled: boolean = false
    ) {
        this.key = key
        this.label = label
        this.permissionList = permissionList
        this.maxCount = maxCount
        this.disabled = disabled
    }

    // 增加响应次数
    increaseCount() {
        this.count++
    }

    // 重置响应次数
    resetCount() {
        this.count = 0
    }
    // 减少响应次数
    decreaseCount(count: number = 1) {
        this.count -= count
    }
    // 判断是否达到最大响应次数
    isMaxCount() {
        if (this.maxCount === -1) return false
        return this.count >= this.maxCount
    }

    // 获取label
    static getLabel(key: EnumKey) {
        return this.get(key)?.label
    }

    // 获取key
    getKey() {
        return this.key
    }

    // 查找一个枚举选项
    static get<K extends EnumKey, E extends AirEnum<K>>(
        this: ClassConstructor<E>,
        key: EnumKey
    ): E | null {
        return (
            (this as Json).toArray().find((item: E) => item.key === key) || null
        )
    }

    /**
     * 将枚举转为数组
     * @param this
     * @returns
     */
    static toArray<K extends EnumKey, E extends AirEnum<K>>(
        this: ClassConstructor<E>
    ): E[] {
        return Object.values(this).filter((item) => item instanceof this)
    }

    // 判断key 是否相等
    equalsKey(key: EnumKey): boolean {
        return this.key === key
    }
    // 判断权限
    hasPermission(permission: string[]): {
        isHasPermission: boolean
        missingPermissions: string[]
    } {
        // 如果传入的权限列表为空，则表示没有权限
        if (permission.length === 0)
            return {
                isHasPermission: false,
                missingPermissions: []
            }
        // 当前行为权限是 ['*'] 则表示拥有所有权限
        if (this.permissionList[0] === '*')
            return {
                isHasPermission: true,
                missingPermissions: ['*']
            }
        // 当前权限要全部在传入的权限列表中
        const isHasPermission = permission.every((item) =>
            this.permissionList.includes(item)
        )
        // 把缺少的权限记录下来
        const missingPermissions = permission.filter(
            (item) => !this.permissionList.includes(item)
        )
        return {
            isHasPermission,
            missingPermissions
        }
    }
}
