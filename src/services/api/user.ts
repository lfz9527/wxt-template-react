// @ts-ignore
/* eslint-disable */
import {request} from '../fetchService'

/** 封号解封 POST /api/admin/User/CloseUser */
export async function postAdminUserCloseUser(
    body: API.FBStateIds,
    options?: {[key: string]: any}
) {
    return request<API.REWebApiCallback>('/api/admin/User/CloseUser', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        data: body,
        ...(options || {})
    })
}

/** 查询用户列表 GET /api/admin/User/GetUserList */
export async function getAdminUserGetUserList(
    // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
    params: API.getAdminUserGetUserListParams,
    options?: {[key: string]: any}
) {
    return request<API.REWebApiCallback>('/api/admin/User/GetUserList', {
        method: 'GET',
        params: {
            ...params
        },
        ...(options || {})
    })
}

/** 修改用户 POST /api/admin/User/SaveUser */
export async function postAdminUserSaveUser(
    body: API.FBUser,
    options?: {[key: string]: any}
) {
    return request<API.REWebApiCallback>('/api/admin/User/SaveUser', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        data: body,
        ...(options || {})
    })
}

/** 用户是否自动关联网页 POST /api/User/AutoLinkWeb */
export async function postUserAutoLinkWeb(
    body: API.FBState,
    options?: {[key: string]: any}
) {
    return request<API.REWebApiCallback>('/api/User/AutoLinkWeb', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        data: body,
        ...(options || {})
    })
}

/** 根据tempkey获取token GET /api/User/GetTokenForTempKey */
export async function getUserGetTokenForTempKey(
    // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
    params: API.getUserGetTokenForTempKeyParams,
    options?: {[key: string]: any}
) {
    return request<API.REWebApiCallback>('/api/User/GetTokenForTempKey', {
        method: 'GET',
        params: {
            ...params
        },
        ...(options || {})
    })
}

/** 获取管理员token，测试专用 GET /api/User/GetTokenForTest */
export async function getUserGetTokenForTest(options?: {[key: string]: any}) {
    return request<API.REWebApiCallback>('/api/User/GetTokenForTest', {
        method: 'GET',
        ...(options || {})
    })
}

/** 根据Id查询用户 GET /api/User/GetUserById */
export async function getUserGetUserById(
    // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
    params: API.getUserGetUserByIdParams,
    options?: {[key: string]: any}
) {
    return request<API.REWebApiCallback>('/api/User/GetUserById', {
        method: 'GET',
        params: {
            ...params
        },
        ...(options || {})
    })
}

/** 查询当前登录用户信息 GET /api/User/GetUserByLogin */
export async function getUserGetUserByLogin(options?: {[key: string]: any}) {
    return request<API.REWebApiCallback>('/api/User/GetUserByLogin', {
        method: 'GET',
        ...(options || {})
    })
}

/** 查询用户列表 GET /api/User/GetUserList */
export async function getUserGetUserList(
    // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
    params: API.getUserGetUserListParams,
    options?: {[key: string]: any}
) {
    return request<API.REWebApiCallback>('/api/User/GetUserList', {
        method: 'GET',
        params: {
            ...params
        },
        ...(options || {})
    })
}

/** 根据Id查询第三方平台用户 GET /api/User/GetUserProviderById */
export async function getUserGetUserProviderById(
    // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
    params: API.getUserGetUserProviderByIdParams,
    options?: {[key: string]: any}
) {
    return request<API.REWebApiCallback>('/api/User/GetUserProviderById', {
        method: 'GET',
        params: {
            ...params
        },
        ...(options || {})
    })
}

/** 查询第三方平台用户列表 GET /api/User/GetUserProviderList */
export async function getUserGetUserProviderList(
    // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
    params: API.getUserGetUserProviderListParams,
    options?: {[key: string]: any}
) {
    return request<API.REWebApiCallback>('/api/User/GetUserProviderList', {
        method: 'GET',
        params: {
            ...params
        },
        ...(options || {})
    })
}

/** 是否签过到 GET /api/User/IsUserSignin */
export async function getUserIsUserSignin(options?: {[key: string]: any}) {
    return request<API.REWebApiCallback>('/api/User/IsUserSignin', {
        method: 'GET',
        ...(options || {})
    })
}

/** 签到 POST /api/User/UserSignin */
export async function postUserUserSignin(options?: {[key: string]: any}) {
    return request<API.REWebApiCallback>('/api/User/UserSignin', {
        method: 'POST',
        ...(options || {})
    })
}
