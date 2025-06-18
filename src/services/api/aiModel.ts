// @ts-ignore
/* eslint-disable */
import {request} from '../fetchService'

/** 删除Ai模型 POST /api/admin/AiModel/DeleteAiModel */
export async function postAdminAiModelDeleteAiModel(
    body: API.FBIds,
    options?: {[key: string]: any}
) {
    return request<API.REWebApiCallback>('/api/admin/AiModel/DeleteAiModel', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        data: body,
        ...(options || {})
    })
}

/** 根据Id查询Ai模型 GET /api/admin/AiModel/GetAiModelById */
export async function getAdminAiModelGetAiModelById(
    // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
    params: API.getAdminAiModelGetAiModelByIdParams,
    options?: {[key: string]: any}
) {
    return request<API.REWebApiCallback>('/api/admin/AiModel/GetAiModelById', {
        method: 'GET',
        params: {
            ...params
        },
        ...(options || {})
    })
}

/** 查询Ai模型列表 GET /api/admin/AiModel/GetAiModelList */
export async function getAdminAiModelGetAiModelList(
    // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
    params: API.getAdminAiModelGetAiModelListParams,
    options?: {[key: string]: any}
) {
    return request<API.REWebApiCallback>('/api/admin/AiModel/GetAiModelList', {
        method: 'GET',
        params: {
            ...params
        },
        ...(options || {})
    })
}

/** 上线下线AI模型 POST /api/admin/AiModel/OnlineAiModel */
export async function postAdminAiModelOnlineAiModel(
    body: API.FBStateIds,
    options?: {[key: string]: any}
) {
    return request<API.REWebApiCallback>('/api/admin/AiModel/OnlineAiModel', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        data: body,
        ...(options || {})
    })
}

/** 编辑Ai模型 POST /api/admin/AiModel/SaveAiModel */
export async function postAdminAiModelSaveAiModel(
    body: API.FBAiModel,
    options?: {[key: string]: any}
) {
    return request<API.REWebApiCallback>('/api/admin/AiModel/SaveAiModel', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        data: body,
        ...(options || {})
    })
}

/** 一键同步模型映射 POST /api/admin/AiModel/SyncModelMap */
export async function postAdminAiModelSyncModelMap(options?: {
    [key: string]: any
}) {
    return request<API.REWebApiCallback>('/api/admin/AiModel/SyncModelMap', {
        method: 'POST',
        ...(options || {})
    })
}

/** 根据Id查询模型 GET /api/AiModel/GetAiModelById */
export async function getAiModelGetAiModelById(
    // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
    params: API.getAiModelGetAiModelByIdParams,
    options?: {[key: string]: any}
) {
    return request<API.REWebApiCallback>('/api/AiModel/GetAiModelById', {
        method: 'GET',
        params: {
            ...params
        },
        ...(options || {})
    })
}

/** 查询所有模型 GET /api/AiModel/GetModelListAll */
export async function getAiModelGetModelListAll(options?: {
    [key: string]: any
}) {
    return request<API.REWebApiCallback>('/api/AiModel/GetModelListAll', {
        method: 'GET',
        ...(options || {})
    })
}

/** 查询指定套餐可以使用的模型 GET /api/AiModel/GetModelListByVipPackageId */
export async function getAiModelGetModelListByVipPackageId(
    // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
    params: API.getAiModelGetModelListByVipPackageIdParams,
    options?: {[key: string]: any}
) {
    return request<API.REWebApiCallback>(
        '/api/AiModel/GetModelListByVipPackageId',
        {
            method: 'GET',
            params: {
                ...params
            },
            ...(options || {})
        }
    )
}
