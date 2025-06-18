// @ts-ignore
/* eslint-disable */
import {request} from '../fetchService'

/** 删除VIP套餐 POST /api/admin/Vip/DeleteVipPackage */
export async function postAdminVipDeleteVipPackage(
    body: API.FBIds,
    options?: {[key: string]: any}
) {
    return request<API.REWebApiCallback>('/api/admin/Vip/DeleteVipPackage', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        data: body,
        ...(options || {})
    })
}

/** 查询货币枚举 GET /api/admin/Vip/GetCurrencyCodeList */
export async function getAdminVipGetCurrencyCodeList(options?: {
    [key: string]: any
}) {
    return request<API.REWebApiCallback>('/api/admin/Vip/GetCurrencyCodeList', {
        method: 'GET',
        ...(options || {})
    })
}

/** 获取积分类型列表 GET /api/admin/Vip/GetUserIntegralTypeList */
export async function getAdminVipGetUserIntegralTypeList(options?: {
    [key: string]: any
}) {
    return request<API.REWebApiCallback>(
        '/api/admin/Vip/GetUserIntegralTypeList',
        {
            method: 'GET',
            ...(options || {})
        }
    )
}

/** 根据Id查询VIP套餐 GET /api/admin/Vip/GetVipPackageById */
export async function getAdminVipGetVipPackageById(
    // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
    params: API.getAdminVipGetVipPackageByIdParams,
    options?: {[key: string]: any}
) {
    return request<API.REWebApiCallback>('/api/admin/Vip/GetVipPackageById', {
        method: 'GET',
        params: {
            ...params
        },
        ...(options || {})
    })
}

/** 查询VIP套餐列表 GET /api/admin/Vip/GetVipPackageList */
export async function getAdminVipGetVipPackageList(
    // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
    params: API.getAdminVipGetVipPackageListParams,
    options?: {[key: string]: any}
) {
    return request<API.REWebApiCallback>('/api/admin/Vip/GetVipPackageList', {
        method: 'GET',
        params: {
            ...params
        },
        ...(options || {})
    })
}

/** 开启关闭VIP套餐 POST /api/admin/Vip/OpenVipPackage */
export async function postAdminVipOpenVipPackage(
    body: API.FBStateIds,
    options?: {[key: string]: any}
) {
    return request<API.REWebApiCallback>('/api/admin/Vip/OpenVipPackage', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        data: body,
        ...(options || {})
    })
}

/** 编辑VIP套餐 POST /api/admin/Vip/SaveVipPackage */
export async function postAdminVipSaveVipPackage(
    body: API.FBVipPackage,
    options?: {[key: string]: any}
) {
    return request<API.REWebApiCallback>('/api/admin/Vip/SaveVipPackage', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        data: body,
        ...(options || {})
    })
}

/** 提交订单 POST /api/Vip/AddVipOrder */
export async function postVipAddVipOrder(
    body: API.FBVipOrder,
    options?: {[key: string]: any}
) {
    return request<API.REWebApiCallback>('/api/Vip/AddVipOrder', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        data: body,
        ...(options || {})
    })
}

/** 支付完成后回调 POST /api/Vip/CallbackVipOrderPay */
export async function postVipCallbackVipOrderPay(
    body: API.REVipOrder,
    options?: {[key: string]: any}
) {
    return request<API.REWebApiCallback>('/api/Vip/CallbackVipOrderPay', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        data: body,
        ...(options || {})
    })
}

/** 删除用户VIP订单 POST /api/Vip/DeleteVipOrder */
export async function postVipDeleteVipOrder(
    body: API.FBIds,
    options?: {[key: string]: any}
) {
    return request<API.REWebApiCallback>('/api/Vip/DeleteVipOrder', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        data: body,
        ...(options || {})
    })
}

/** 查询vip套餐日期列表 GET /api/Vip/GetVipDateTypelList */
export async function getVipGetVipDateTypelList(options?: {
    [key: string]: any
}) {
    return request<API.REWebApiCallback>('/api/Vip/GetVipDateTypelList', {
        method: 'GET',
        ...(options || {})
    })
}

/** 根据Id查询用户VIP订单 GET /api/Vip/GetVipOrderById */
export async function getVipGetVipOrderById(
    // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
    params: API.getVipGetVipOrderByIdParams,
    options?: {[key: string]: any}
) {
    return request<API.REWebApiCallback>('/api/Vip/GetVipOrderById', {
        method: 'GET',
        params: {
            ...params
        },
        ...(options || {})
    })
}

/** 查询用户VIP订单列表 GET /api/Vip/GetVipOrderList */
export async function getVipGetVipOrderList(
    // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
    params: API.getVipGetVipOrderListParams,
    options?: {[key: string]: any}
) {
    return request<API.REWebApiCallback>('/api/Vip/GetVipOrderList', {
        method: 'GET',
        params: {
            ...params
        },
        ...(options || {})
    })
}

/** 查询所有启用套餐 GET /api/Vip/GetVipPackageByOpen */
export async function getVipGetVipPackageByOpen(options?: {
    [key: string]: any
}) {
    return request<API.REWebApiCallback>('/api/Vip/GetVipPackageByOpen', {
        method: 'GET',
        ...(options || {})
    })
}

/** 查询vip套餐级别列表 GET /api/Vip/GetVipPackageLevelList */
export async function getVipGetVipPackageLevelList(options?: {
    [key: string]: any
}) {
    return request<API.REWebApiCallback>('/api/Vip/GetVipPackageLevelList', {
        method: 'GET',
        ...(options || {})
    })
}
