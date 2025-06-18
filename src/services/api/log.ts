// @ts-ignore
/* eslint-disable */
import {request} from '../fetchService'

/** 查询日志列表 GET /api/Log/GetLogList */
export async function getLogGetLogList(
    // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
    params: API.getLogGetLogListParams,
    options?: {[key: string]: any}
) {
    return request<API.REWebApiCallback>('/api/Log/GetLogList', {
        method: 'GET',
        params: {
            ...params
        },
        ...(options || {})
    })
}

/** 查询错误日志类型列表 GET /api/Log/GetLogTypeList */
export async function getLogGetLogTypeList(options?: {[key: string]: any}) {
    return request<API.REWebApiCallback>('/api/Log/GetLogTypeList', {
        method: 'GET',
        ...(options || {})
    })
}

/** 清空全部日志（物理删除） POST /api/Log/TrueDeleteLog */
export async function postLogTrueDeleteLog(options?: {[key: string]: any}) {
    return request<API.REWebApiCallback>('/api/Log/TrueDeleteLog', {
        method: 'POST',
        ...(options || {})
    })
}
