// @ts-ignore
/* eslint-disable */
import {request} from '../fetchService'

/** 允许/不允许 POST /api/admin/ParamTools/AllowParamTools */
export async function postAdminParamToolsAllowParamTools(
    body: API.FBStateIds,
    options?: {[key: string]: any}
) {
    return request<API.REWebApiCallback>(
        '/api/admin/ParamTools/AllowParamTools',
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

/** 复制一个模型参数 POST /api/admin/ParamTools/CopyParamToolsByModel */
export async function postAdminParamToolsCopyParamToolsByModel(
    body: API.FBModelCopy,
    options?: {[key: string]: any}
) {
    return request<API.REWebApiCallback>(
        '/api/admin/ParamTools/CopyParamToolsByModel',
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

/** 删除参数配置 POST /api/admin/ParamTools/DeleteParamTools */
export async function postAdminParamToolsDeleteParamTools(
    body: API.FBIds,
    options?: {[key: string]: any}
) {
    return request<API.REWebApiCallback>(
        '/api/admin/ParamTools/DeleteParamTools',
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

/** 查询指定模型的所有参数 GET /api/admin/ParamTools/GetParamToolsAllByModelId */
export async function getAdminParamToolsGetParamToolsAllByModelId(
    // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
    params: API.getAdminParamToolsGetParamToolsAllByModelIdParams,
    options?: {[key: string]: any}
) {
    return request<API.REWebApiCallback>(
        '/api/admin/ParamTools/GetParamToolsAllByModelId',
        {
            method: 'GET',
            params: {
                ...params
            },
            ...(options || {})
        }
    )
}

/** 根据Id查询参数配置 GET /api/admin/ParamTools/GetParamToolsById */
export async function getAdminParamToolsGetParamToolsById(
    // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
    params: API.getAdminParamToolsGetParamToolsByIdParams,
    options?: {[key: string]: any}
) {
    return request<API.REWebApiCallback>(
        '/api/admin/ParamTools/GetParamToolsById',
        {
            method: 'GET',
            params: {
                ...params
            },
            ...(options || {})
        }
    )
}

/** 查询参数配置列表 GET /api/admin/ParamTools/GetParamToolsList */
export async function getAdminParamToolsGetParamToolsList(
    // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
    params: API.getAdminParamToolsGetParamToolsListParams,
    options?: {[key: string]: any}
) {
    return request<API.REWebApiCallback>(
        '/api/admin/ParamTools/GetParamToolsList',
        {
            method: 'GET',
            params: {
                ...params
            },
            ...(options || {})
        }
    )
}

/** 编辑参数配置 POST /api/admin/ParamTools/SaveParamTools */
export async function postAdminParamToolsSaveParamTools(
    body: API.FBParamTools,
    options?: {[key: string]: any}
) {
    return request<API.REWebApiCallback>(
        '/api/admin/ParamTools/SaveParamTools',
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

/** 根据模型Id查询参数配置 GET /api/ParamTools/GetParamToolsByModelId */
export async function getParamToolsGetParamToolsByModelId(
    // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
    params: API.getParamToolsGetParamToolsByModelIdParams,
    options?: {[key: string]: any}
) {
    return request<API.REWebApiCallback>(
        '/api/ParamTools/GetParamToolsByModelId',
        {
            method: 'GET',
            params: {
                // isAllowTool has a default value: true
                isAllowTool: 'true',
                ...params
            },
            ...(options || {})
        }
    )
}
