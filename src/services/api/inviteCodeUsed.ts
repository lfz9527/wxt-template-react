// @ts-ignore
/* eslint-disable */
import {request} from '../fetchService'

/** 根据Id查询邀请码使用记录 GET /api/admin/InviteCodeUsed/GetInviteCodeUsedById */
export async function getAdminInviteCodeUsedGetInviteCodeUsedById(
    // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
    params: API.getAdminInviteCodeUsedGetInviteCodeUsedByIdParams,
    options?: {[key: string]: any}
) {
    return request<API.REWebApiCallback>(
        '/api/admin/InviteCodeUsed/GetInviteCodeUsedById',
        {
            method: 'GET',
            params: {
                ...params
            },
            ...(options || {})
        }
    )
}

/** 查询邀请码使用记录列表 GET /api/admin/InviteCodeUsed/GetInviteCodeUsedList */
export async function getAdminInviteCodeUsedGetInviteCodeUsedList(
    // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
    params: API.getAdminInviteCodeUsedGetInviteCodeUsedListParams,
    options?: {[key: string]: any}
) {
    return request<API.REWebApiCallback>(
        '/api/admin/InviteCodeUsed/GetInviteCodeUsedList',
        {
            method: 'GET',
            params: {
                ...params
            },
            ...(options || {})
        }
    )
}
