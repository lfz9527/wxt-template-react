// @ts-ignore
/* eslint-disable */
import {request} from '../fetchService'

/** 查询当前请求头语言 GET /api/System */
export async function getSystem(options?: {[key: string]: any}) {
    return request<API.REWebApiCallback>('/api/System', {
        method: 'GET',
        ...(options || {})
    })
}

/** 反馈 POST /api/System/AddFeedback */
export async function postSystemAddFeedback(
    body: API.FBFeedback,
    options?: {[key: string]: any}
) {
    return request<API.REWebApiCallback>('/api/System/AddFeedback', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        data: body,
        ...(options || {})
    })
}

/** 删除配置项 POST /api/System/DeleteSetting */
export async function postSystemDeleteSetting(
    body: API.FBIds,
    options?: {[key: string]: any}
) {
    return request<API.REWebApiCallback>('/api/System/DeleteSetting', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        data: body,
        ...(options || {})
    })
}

/** 根据Id查询配置项 GET /api/System/GetSettingById */
export async function getSystemGetSettingById(
    // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
    params: API.getSystemGetSettingByIdParams,
    options?: {[key: string]: any}
) {
    return request<API.REWebApiCallback>('/api/System/GetSettingById', {
        method: 'GET',
        params: {
            ...params
        },
        ...(options || {})
    })
}

/** 查询配置项列表（分页） GET /api/System/GetSettingList */
export async function getSystemGetSettingList(
    // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
    params: API.getSystemGetSettingListParams,
    options?: {[key: string]: any}
) {
    return request<API.REWebApiCallback>('/api/System/GetSettingList', {
        method: 'GET',
        params: {
            ...params
        },
        ...(options || {})
    })
}

/** 查询所有配置值列表 GET /api/System/GetSettingListAll */
export async function getSystemGetSettingListAll(options?: {
    [key: string]: any
}) {
    return request<API.REWebApiCallback>('/api/System/GetSettingListAll', {
        method: 'GET',
        ...(options || {})
    })
}

/** 根据键名查询对象 GET /api/System/GetSettingValueByKey */
export async function getSystemGetSettingValueByKey(
    // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
    params: API.getSystemGetSettingValueByKeyParams,
    options?: {[key: string]: any}
) {
    return request<API.REWebApiCallback>('/api/System/GetSettingValueByKey', {
        method: 'GET',
        params: {
            ...params
        },
        ...(options || {})
    })
}

/** 新增/修改配置项 POST /api/System/SaveSetting */
export async function postSystemSaveSetting(
    body: API.FBSetting,
    options?: {[key: string]: any}
) {
    return request<API.REWebApiCallback>('/api/System/SaveSetting', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        data: body,
        ...(options || {})
    })
}

/** 翻译 POST /api/System/TransText */
export async function postSystemTransText(
    body: API.FBTransText,
    options?: {[key: string]: any}
) {
    return request<API.REWebApiCallback>('/api/System/TransText', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        data: body,
        ...(options || {})
    })
}
