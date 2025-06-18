// @ts-ignore
/* eslint-disable */
import {request} from '../fetchService'

/** 新增收藏 POST /api/Save/AddSave */
export async function postSaveAddSave(
    body: API.FBAddSave,
    options?: {[key: string]: any}
) {
    return request<API.REWebApiCallback>('/api/Save/AddSave', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        data: body,
        ...(options || {})
    })
}

/** 删除收藏 POST /api/Save/DeleteSave */
export async function postSaveDeleteSave(
    body: API.FBDeleteSave,
    options?: {[key: string]: any}
) {
    return request<API.REWebApiCallback>('/api/Save/DeleteSave', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        data: body,
        ...(options || {})
    })
}

/** 根据Id查询收藏 GET /api/Save/GetSaveById */
export async function getSaveGetSaveById(
    // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
    params: API.getSaveGetSaveByIdParams,
    options?: {[key: string]: any}
) {
    return request<API.REWebApiCallback>('/api/Save/GetSaveById', {
        method: 'GET',
        params: {
            ...params
        },
        ...(options || {})
    })
}

/** 查询当前登录用户的收藏 GET /api/Save/GetSaveListBySelf */
export async function getSaveGetSaveListBySelf(
    // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
    params: API.getSaveGetSaveListBySelfParams,
    options?: {[key: string]: any}
) {
    return request<API.REWebApiCallback>('/api/Save/GetSaveListBySelf', {
        method: 'GET',
        params: {
            ...params
        },
        ...(options || {})
    })
}

/** 修改收藏 POST /api/Save/UpdateSave */
export async function postSaveUpdateSave(
    body: API.FBUpdateSave,
    options?: {[key: string]: any}
) {
    return request<API.REWebApiCallback>('/api/Save/UpdateSave', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        data: body,
        ...(options || {})
    })
}
