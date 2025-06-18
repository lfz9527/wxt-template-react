// @ts-ignore
/* eslint-disable */
import {request} from '../fetchService'

/** 删除快捷功能 POST /api/admin/QuickFunction/DeleteQuickFunction */
export async function postAdminQuickFunctionDeleteQuickFunction(
    body: API.FBIds,
    options?: {[key: string]: any}
) {
    return request<API.REWebApiCallback>(
        '/api/admin/QuickFunction/DeleteQuickFunction',
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

/** 根据Id查询快捷功能 GET /api/admin/QuickFunction/GetQuickFunctionById */
export async function getAdminQuickFunctionGetQuickFunctionById(
    // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
    params: API.getAdminQuickFunctionGetQuickFunctionByIdParams,
    options?: {[key: string]: any}
) {
    return request<API.REWebApiCallback>(
        '/api/admin/QuickFunction/GetQuickFunctionById',
        {
            method: 'GET',
            params: {
                ...params
            },
            ...(options || {})
        }
    )
}

/** 查询快捷功能列表 GET /api/admin/QuickFunction/GetQuickFunctionList */
export async function getAdminQuickFunctionGetQuickFunctionList(
    // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
    params: API.getAdminQuickFunctionGetQuickFunctionListParams,
    options?: {[key: string]: any}
) {
    return request<API.REWebApiCallback>(
        '/api/admin/QuickFunction/GetQuickFunctionList',
        {
            method: 'GET',
            params: {
                ...params
            },
            ...(options || {})
        }
    )
}

/** 编辑快捷功能 POST /api/admin/QuickFunction/SaveQuickFunction */
export async function postAdminQuickFunctionSaveQuickFunction(
    body: API.FBQuickFunction,
    options?: {[key: string]: any}
) {
    return request<API.REWebApiCallback>(
        '/api/admin/QuickFunction/SaveQuickFunction',
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

/** 查询所有快捷功能 GET /api/QuickFunction/GetQuickFunctionListAll */
export async function getQuickFunctionGetQuickFunctionListAll(options?: {
    [key: string]: any
}) {
    return request<API.REWebApiCallback>(
        '/api/QuickFunction/GetQuickFunctionListAll',
        {
            method: 'GET',
            ...(options || {})
        }
    )
}

/** 根据分组名称查询快捷功能列表 GET /api/QuickFunction/GetQuickFunctionListByGroup */
export async function getQuickFunctionGetQuickFunctionListByGroup(
    // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
    params: API.getQuickFunctionGetQuickFunctionListByGroupParams,
    options?: {[key: string]: any}
) {
    return request<API.REWebApiCallback>(
        '/api/QuickFunction/GetQuickFunctionListByGroup',
        {
            method: 'GET',
            params: {
                ...params
            },
            ...(options || {})
        }
    )
}
