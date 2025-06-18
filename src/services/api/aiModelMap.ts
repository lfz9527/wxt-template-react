// @ts-ignore
/* eslint-disable */
import {request} from '../fetchService'

/** 删除Ai平台账号 POST /api/admin/AiModelMap/DeleteAiAccount */
export async function postAdminAiModelMapDeleteAiAccount(
    body: API.AIRequestIds,
    options?: {[key: string]: any}
) {
    return request<any>('/api/admin/AiModelMap/DeleteAiAccount', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        data: body,
        ...(options || {})
    })
}

/** 删除Ai密钥 POST /api/admin/AiModelMap/DeleteAiKey */
export async function postAdminAiModelMapDeleteAiKey(
    body: API.AIRequestIds,
    options?: {[key: string]: any}
) {
    return request<any>('/api/admin/AiModelMap/DeleteAiKey', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        data: body,
        ...(options || {})
    })
}

/** 删除模型 POST /api/admin/AiModelMap/DeleteAiModel */
export async function postAdminAiModelMapDeleteAiModel(
    body: API.FBIds,
    options?: {[key: string]: any}
) {
    return request<any>('/api/admin/AiModelMap/DeleteAiModel', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        data: body,
        ...(options || {})
    })
}

/** 批量删除Ai服务商 POST /api/admin/AiModelMap/DeleteAiStore */
export async function postAdminAiModelMapDeleteAiStore(
    body: API.AIRequestIds,
    options?: {[key: string]: any}
) {
    return request<any>('/api/admin/AiModelMap/DeleteAiStore', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        data: body,
        ...(options || {})
    })
}

/** 查询单个账号 GET /api/admin/AiModelMap/GetAiAccountById */
export async function getAdminAiModelMapGetAiAccountById(
    // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
    params: API.getAdminAiModelMapGetAiAccountByIdParams,
    options?: {[key: string]: any}
) {
    return request<any>('/api/admin/AiModelMap/GetAiAccountById', {
        method: 'GET',
        params: {
            ...params
        },
        ...(options || {})
    })
}

/** 查询账号列表 GET /api/admin/AiModelMap/GetAiAccountList */
export async function getAdminAiModelMapGetAiAccountList(
    // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
    params: API.getAdminAiModelMapGetAiAccountListParams,
    options?: {[key: string]: any}
) {
    return request<any>('/api/admin/AiModelMap/GetAiAccountList', {
        method: 'GET',
        params: {
            ...params
        },
        ...(options || {})
    })
}

/** 根据id查询单个密钥 GET /api/admin/AiModelMap/GetAiKeyById */
export async function getAdminAiModelMapGetAiKeyById(
    // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
    params: API.getAdminAiModelMapGetAiKeyByIdParams,
    options?: {[key: string]: any}
) {
    return request<any>('/api/admin/AiModelMap/GetAiKeyById', {
        method: 'GET',
        params: {
            ...params
        },
        ...(options || {})
    })
}

/** 查询密钥列表 GET /api/admin/AiModelMap/GetAiKeyList */
export async function getAdminAiModelMapGetAiKeyList(
    // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
    params: API.getAdminAiModelMapGetAiKeyListParams,
    options?: {[key: string]: any}
) {
    return request<any>('/api/admin/AiModelMap/GetAiKeyList', {
        method: 'GET',
        params: {
            ...params
        },
        ...(options || {})
    })
}

/** 根据Id查询模型 GET /api/admin/AiModelMap/GetAiModelById */
export async function getAdminAiModelMapGetAiModelById(
    // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
    params: API.getAdminAiModelMapGetAiModelByIdParams,
    options?: {[key: string]: any}
) {
    return request<API.REWebApiCallback>(
        '/api/admin/AiModelMap/GetAiModelById',
        {
            method: 'GET',
            params: {
                ...params
            },
            ...(options || {})
        }
    )
}

/** 分页查询模型列表 GET /api/admin/AiModelMap/GetAiModelList */
export async function getAdminAiModelMapGetAiModelList(
    // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
    params: API.getAdminAiModelMapGetAiModelListParams,
    options?: {[key: string]: any}
) {
    return request<API.REWebApiCallback>(
        '/api/admin/AiModelMap/GetAiModelList',
        {
            method: 'GET',
            params: {
                ...params
            },
            ...(options || {})
        }
    )
}

/** 查询全部模型列表 GET /api/admin/AiModelMap/GetAiModelListAll */
export async function getAdminAiModelMapGetAiModelListAll(options?: {
    [key: string]: any
}) {
    return request<API.REWebApiCallback>(
        '/api/admin/AiModelMap/GetAiModelListAll',
        {
            method: 'GET',
            ...(options || {})
        }
    )
}

/** 根据指定Id查询服务商 GET /api/admin/AiModelMap/GetAiStoreById */
export async function getAdminAiModelMapGetAiStoreById(
    // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
    params: API.getAdminAiModelMapGetAiStoreByIdParams,
    options?: {[key: string]: any}
) {
    return request<any>('/api/admin/AiModelMap/GetAiStoreById', {
        method: 'GET',
        params: {
            ...params
        },
        ...(options || {})
    })
}

/** 查询服务商列表 GET /api/admin/AiModelMap/GetAiStoreList */
export async function getAdminAiModelMapGetAiStoreList(
    // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
    params: API.getAdminAiModelMapGetAiStoreListParams,
    options?: {[key: string]: any}
) {
    return request<any>('/api/admin/AiModelMap/GetAiStoreList', {
        method: 'GET',
        params: {
            ...params
        },
        ...(options || {})
    })
}

/** 批量开启关闭模型 POST /api/admin/AiModelMap/OpenAiModel */
export async function postAdminAiModelMapOpenAiModel(
    body: API.FBStateIds,
    options?: {[key: string]: any}
) {
    return request<any>('/api/admin/AiModelMap/OpenAiModel', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        data: body,
        ...(options || {})
    })
}

/** 编辑AI平台账号 POST /api/admin/AiModelMap/SaveAiAccount */
export async function postAdminAiModelMapSaveAiAccount(
    body: API.AIRequestAccount,
    options?: {[key: string]: any}
) {
    return request<any>('/api/admin/AiModelMap/SaveAiAccount', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        data: body,
        ...(options || {})
    })
}

/** 编辑密钥 POST /api/admin/AiModelMap/SaveAiKey */
export async function postAdminAiModelMapSaveAiKey(
    body: API.AIRequestKey,
    options?: {[key: string]: any}
) {
    return request<any>('/api/admin/AiModelMap/SaveAiKey', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        data: body,
        ...(options || {})
    })
}

/** 修改Ai模型 POST /api/admin/AiModelMap/SaveAiModel */
export async function postAdminAiModelMapSaveAiModel(
    body: API.AIRequestModel,
    options?: {[key: string]: any}
) {
    return request<any>('/api/admin/AiModelMap/SaveAiModel', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        data: body,
        ...(options || {})
    })
}

/** 编辑Ai服务商 POST /api/admin/AiModelMap/SaveAiStore */
export async function postAdminAiModelMapSaveAiStore(
    body: API.AIRequestStore,
    options?: {[key: string]: any}
) {
    return request<any>('/api/admin/AiModelMap/SaveAiStore', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        data: body,
        ...(options || {})
    })
}
