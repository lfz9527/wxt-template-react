// @ts-ignore
/* eslint-disable */
import {request} from '../fetchService'

/** 审核/取消审核 POST /api/admin/UserPrompt/CheckUserPrompt */
export async function postAdminUserPromptCheckUserPrompt(
    body: API.FBStateIds,
    options?: {[key: string]: any}
) {
    return request<API.REWebApiCallback>(
        '/api/admin/UserPrompt/CheckUserPrompt',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            data: body,
            ...(options || {})
        }
    )
}

/** 删除用户提示词 POST /api/admin/UserPrompt/DeleteUserPrompt */
export async function postAdminUserPromptDeleteUserPrompt(
    body: API.FBIds,
    options?: {[key: string]: any}
) {
    return request<API.REWebApiCallback>(
        '/api/admin/UserPrompt/DeleteUserPrompt',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            data: body,
            ...(options || {})
        }
    )
}

/** 根据ID查询用户提示词 GET /api/admin/UserPrompt/GetUserPromptById */
export async function getAdminUserPromptGetUserPromptById(
    // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
    params: API.getAdminUserPromptGetUserPromptByIdParams,
    options?: {[key: string]: any}
) {
    return request<API.REWebApiCallback>(
        '/api/admin/UserPrompt/GetUserPromptById',
        {
            method: 'GET',
            params: {
                ...params
            },
            ...(options || {})
        }
    )
}

/** 查询用户提示词列表 GET /api/admin/UserPrompt/GetUserPromptList */
export async function getAdminUserPromptGetUserPromptList(
    // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
    params: API.getAdminUserPromptGetUserPromptListParams,
    options?: {[key: string]: any}
) {
    return request<API.REWebApiCallback>(
        '/api/admin/UserPrompt/GetUserPromptList',
        {
            method: 'GET',
            params: {
                ...params
            },
            ...(options || {})
        }
    )
}

/** 删除用户提示词 POST /api/UserPrompt/DeleteUserPrompt */
export async function postUserPromptDeleteUserPrompt(
    body: API.FBIds,
    options?: {[key: string]: any}
) {
    return request<API.REWebApiCallback>('/api/UserPrompt/DeleteUserPrompt', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        data: body,
        ...(options || {})
    })
}

/** 根据Id查询提示词 GET /api/UserPrompt/GetUserPromptById */
export async function getUserPromptGetUserPromptById(
    // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
    params: API.getUserPromptGetUserPromptByIdParams,
    options?: {[key: string]: any}
) {
    return request<API.REWebApiCallback>('/api/UserPrompt/GetUserPromptById', {
        method: 'GET',
        params: {
            ...params
        },
        ...(options || {})
    })
}

/** 保存用户提示词 POST /api/UserPrompt/SaveUserPrompt */
export async function postUserPromptSaveUserPrompt(
    body: API.FBUserPrompt,
    options?: {[key: string]: any}
) {
    return request<API.REWebApiCallback>('/api/UserPrompt/SaveUserPrompt', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        data: body,
        ...(options || {})
    })
}
