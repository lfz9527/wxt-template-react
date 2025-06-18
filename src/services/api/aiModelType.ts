// @ts-ignore
/* eslint-disable */
import {request} from '../fetchService'

/** 删除模型类型 POST /api/admin/AiModelType/DeleteAiModelType */
export async function postAdminAiModelTypeDeleteAiModelType(
    body: API.FBIds,
    options?: {[key: string]: any}
) {
    return request<API.REWebApiCallback>(
        '/api/admin/AiModelType/DeleteAiModelType',
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

/** 根据Id查询模型类型 GET /api/admin/AiModelType/GetAiModelTypeById */
export async function getAdminAiModelTypeGetAiModelTypeById(
    // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
    params: API.getAdminAiModelTypeGetAiModelTypeByIdParams,
    options?: {[key: string]: any}
) {
    return request<API.REWebApiCallback>(
        '/api/admin/AiModelType/GetAiModelTypeById',
        {
            method: 'GET',
            params: {
                ...params
            },
            ...(options || {})
        }
    )
}

/** 查询模型类型列表 GET /api/admin/AiModelType/GetAiModelTypeList */
export async function getAdminAiModelTypeGetAiModelTypeList(
    // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
    params: API.getAdminAiModelTypeGetAiModelTypeListParams,
    options?: {[key: string]: any}
) {
    return request<API.REWebApiCallback>(
        '/api/admin/AiModelType/GetAiModelTypeList',
        {
            method: 'GET',
            params: {
                ...params
            },
            ...(options || {})
        }
    )
}

/** 编辑模型类型 POST /api/admin/AiModelType/SaveAiModelType */
export async function postAdminAiModelTypeSaveAiModelType(
    body: API.FBAiModelType,
    options?: {[key: string]: any}
) {
    return request<API.REWebApiCallback>(
        '/api/admin/AiModelType/SaveAiModelType',
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

/** 查询所有模型类型 GET /api/AiModelType/GetAiModelTypeAll */
export async function getAiModelTypeGetAiModelTypeAll(options?: {
    [key: string]: any
}) {
    return request<API.REWebApiCallback>('/api/AiModelType/GetAiModelTypeAll', {
        method: 'GET',
        ...(options || {})
    })
}
