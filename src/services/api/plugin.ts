// @ts-ignore
/* eslint-disable */
import {request} from '../fetchService'

/** 删除插件 POST /api/admin/Plugin/DeletePlugin */
export async function postAdminPluginDeletePlugin(
    body: API.FBIds,
    options?: {[key: string]: any}
) {
    return request<API.REWebApiCallback>('/api/admin/Plugin/DeletePlugin', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        data: body,
        ...(options || {})
    })
}

/** 根据Id查询插件 GET /api/admin/Plugin/GetPluginById */
export async function getAdminPluginGetPluginById(
    // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
    params: API.getAdminPluginGetPluginByIdParams,
    options?: {[key: string]: any}
) {
    return request<API.REWebApiCallback>('/api/admin/Plugin/GetPluginById', {
        method: 'GET',
        params: {
            ...params
        },
        ...(options || {})
    })
}

/** 查询插件列表 GET /api/admin/Plugin/GetPluginList */
export async function getAdminPluginGetPluginList(
    // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
    params: API.getAdminPluginGetPluginListParams,
    options?: {[key: string]: any}
) {
    return request<API.REWebApiCallback>('/api/admin/Plugin/GetPluginList', {
        method: 'GET',
        params: {
            ...params
        },
        ...(options || {})
    })
}

/** 批量启用关闭插件 POST /api/admin/Plugin/OpenPlugins */
export async function postAdminPluginOpenPlugins(
    body: API.FBStateIds,
    options?: {[key: string]: any}
) {
    return request<API.REWebApiCallback>('/api/admin/Plugin/OpenPlugins', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        data: body,
        ...(options || {})
    })
}

/** 编辑插件 POST /api/admin/Plugin/SavePlugin */
export async function postAdminPluginSavePlugin(
    body: API.FBPlugin,
    options?: {[key: string]: any}
) {
    return request<API.REWebApiCallback>('/api/admin/Plugin/SavePlugin', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        data: body,
        ...(options || {})
    })
}

/** 删除插件 POST /api/Plugin/DeletePlugin */
export async function postPluginDeletePlugin(
    body: API.FBIds,
    options?: {[key: string]: any}
) {
    return request<API.REWebApiCallback>('/api/Plugin/DeletePlugin', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        data: body,
        ...(options || {})
    })
}

/** 根据Id查询插件 GET /api/Plugin/GetPluginById */
export async function getPluginGetPluginById(
    // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
    params: API.getPluginGetPluginByIdParams,
    options?: {[key: string]: any}
) {
    return request<API.REWebApiCallback>('/api/Plugin/GetPluginById', {
        method: 'GET',
        params: {
            ...params
        },
        ...(options || {})
    })
}

/** 查询插件列表 GET /api/Plugin/GetPluginList */
export async function getPluginGetPluginList(
    // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
    params: API.getPluginGetPluginListParams,
    options?: {[key: string]: any}
) {
    return request<API.REWebApiCallback>('/api/Plugin/GetPluginList', {
        method: 'GET',
        params: {
            ...params
        },
        ...(options || {})
    })
}

/** 查询可使用的全部插件 POST /api/Plugin/GetPluginListAll */
export async function postPluginGetPluginListAll(options?: {
    [key: string]: any
}) {
    return request<API.REWebApiCallback>('/api/Plugin/GetPluginListAll', {
        method: 'POST',
        ...(options || {})
    })
}

/** 编辑插件 POST /api/Plugin/SavePlugin */
export async function postPluginSavePlugin(
    body: API.FBPlugin,
    options?: {[key: string]: any}
) {
    return request<API.REWebApiCallback>('/api/Plugin/SavePlugin', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        data: body,
        ...(options || {})
    })
}
