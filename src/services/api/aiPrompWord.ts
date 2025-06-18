// @ts-ignore
/* eslint-disable */
import {request} from '../fetchService'

/** 删除AI提示词 POST /api/admin/AiPrompWord/DeleteAiPrompWord */
export async function postAdminAiPrompWordDeleteAiPrompWord(
    body: API.FBIds,
    options?: {[key: string]: any}
) {
    return request<API.REWebApiCallback>(
        '/api/admin/AiPrompWord/DeleteAiPrompWord',
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

/** 根据Id查询AI提示词 GET /api/admin/AiPrompWord/GetAiPrompWordById */
export async function getAdminAiPrompWordGetAiPrompWordById(
    // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
    params: API.getAdminAiPrompWordGetAiPrompWordByIdParams,
    options?: {[key: string]: any}
) {
    return request<API.REWebApiCallback>(
        '/api/admin/AiPrompWord/GetAiPrompWordById',
        {
            method: 'GET',
            params: {
                ...params
            },
            ...(options || {})
        }
    )
}

/** 查询AI提示词列表 GET /api/admin/AiPrompWord/GetAiPrompWordList */
export async function getAdminAiPrompWordGetAiPrompWordList(
    // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
    params: API.getAdminAiPrompWordGetAiPrompWordListParams,
    options?: {[key: string]: any}
) {
    return request<API.REWebApiCallback>(
        '/api/admin/AiPrompWord/GetAiPrompWordList',
        {
            method: 'GET',
            params: {
                ...params
            },
            ...(options || {})
        }
    )
}

/** 编辑AI提示词 POST /api/admin/AiPrompWord/SaveAiPrompWord */
export async function postAdminAiPrompWordSaveAiPrompWord(
    body: API.FBAiPromptWord,
    options?: {[key: string]: any}
) {
    return request<API.REWebApiCallback>(
        '/api/admin/AiPrompWord/SaveAiPrompWord',
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
