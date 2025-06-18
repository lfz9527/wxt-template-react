// @ts-ignore
/* eslint-disable */
import {request} from '../fetchService'

/** 删除邀请码 POST /api/admin/InviteCode/DeleteInviteCode */
export async function postAdminInviteCodeDeleteInviteCode(
    body: API.FBIds,
    options?: {[key: string]: any}
) {
    return request<API.REWebApiCallback>(
        '/api/admin/InviteCode/DeleteInviteCode',
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

/** 根据Id查询邀请码 GET /api/admin/InviteCode/GetInviteCodeById */
export async function getAdminInviteCodeGetInviteCodeById(
    // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
    params: API.getAdminInviteCodeGetInviteCodeByIdParams,
    options?: {[key: string]: any}
) {
    return request<API.REWebApiCallback>(
        '/api/admin/InviteCode/GetInviteCodeById',
        {
            method: 'GET',
            params: {
                ...params
            },
            ...(options || {})
        }
    )
}

/** 查询邀请码列表 GET /api/admin/InviteCode/GetInviteCodeList */
export async function getAdminInviteCodeGetInviteCodeList(
    // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
    params: API.getAdminInviteCodeGetInviteCodeListParams,
    options?: {[key: string]: any}
) {
    return request<API.REWebApiCallback>(
        '/api/admin/InviteCode/GetInviteCodeList',
        {
            method: 'GET',
            params: {
                ...params
            },
            ...(options || {})
        }
    )
}

/** 新增或编辑邀请码 POST /api/admin/InviteCode/SaveInviteCode */
export async function postAdminInviteCodeSaveInviteCode(
    body: API.FBInviteCode,
    options?: {[key: string]: any}
) {
    return request<API.REWebApiCallback>(
        '/api/admin/InviteCode/SaveInviteCode',
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

/** 获取当前用户的邀请码 GET /api/InviteCode/GetInviteCodeBySelf */
export async function getInviteCodeGetInviteCodeBySelf(options?: {
    [key: string]: any
}) {
    return request<API.REWebApiCallback>(
        '/api/InviteCode/GetInviteCodeBySelf',
        {
            method: 'GET',
            ...(options || {})
        }
    )
}

/** 使用邀请码 POST /api/InviteCode/UseInviteCode */
export async function postInviteCodeUseInviteCode(
    body: API.FBUseInviteCode,
    options?: {[key: string]: any}
) {
    return request<API.REWebApiCallback>('/api/InviteCode/UseInviteCode', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        data: body,
        ...(options || {})
    })
}
