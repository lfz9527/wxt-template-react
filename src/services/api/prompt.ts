// @ts-ignore
/* eslint-disable */
import {request} from '../fetchService'

/** 发起生文 POST /api/Prompt/Chat */
export async function postPromptChat(
    body: API.FBPromptChat,
    options?: {[key: string]: any}
) {
    return request<API.REWebApiCallback>('/api/Prompt/Chat', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        data: body,
        ...(options || {})
    })
}

/** 触发按钮 POST /api/Prompt/ClickButton */
export async function postPromptClickButton(
    body: API.FBPromptClickButton,
    options?: {[key: string]: any}
) {
    return request<API.REWebApiCallback>('/api/Prompt/ClickButton', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        data: body,
        ...(options || {})
    })
}

/** 生成一张图片 POST /api/Prompt/Draw */
export async function postPromptDraw(
    body: API.FBPromptDraw,
    options?: {[key: string]: any}
) {
    return request<API.REWebApiCallback>('/api/Prompt/Draw', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        data: body,
        ...(options || {})
    })
}

/** 查询进度 GET /api/Prompt/GetDrawProgress */
export async function getPromptGetDrawProgress(
    // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
    params: API.getPromptGetDrawProgressParams,
    options?: {[key: string]: any}
) {
    return request<API.REWebApiCallback>('/api/Prompt/GetDrawProgress', {
        method: 'GET',
        params: {
            ...params
        },
        ...(options || {})
    })
}
