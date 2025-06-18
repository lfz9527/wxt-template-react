// @ts-ignore
/* eslint-disable */
import {request} from '../fetchService'

/** 上传一个媒体消息 POST /api/Chat/AddChatMedia */
export async function postChatAddChatMedia(
    body: {
        /** 网页Id */
        MediaId?: number
        /** 页面标题 */
        pageTitle?: string
        /** 页面链接 */
        pageUrl?: string
        mediaType?: API.MediaTypeEnum
        /** 引用的消息Id */
        replyChatMessageId?: number
        /** 纯文本 */
        text?: string
        /** 图标图片 */
        iconStr?: string
    },
    pageFile?: File,
    imageFile?: File,
    options?: {[key: string]: any}
) {
    const formData = new FormData()

    if (pageFile) {
        formData.append('pageFile', pageFile)
    }

    if (imageFile) {
        formData.append('imageFile', imageFile)
    }

    Object.keys(body).forEach((ele) => {
        const item = (body as any)[ele]

        if (item !== undefined && item !== null) {
            if (typeof item === 'object' && !(item instanceof File)) {
                if (item instanceof Array) {
                    item.forEach((f) => formData.append(ele, f || ''))
                } else {
                    formData.append(ele, JSON.stringify(item))
                }
            } else {
                formData.append(ele, item)
            }
        }
    })

    return request<API.REWebApiCallback>('/api/Chat/AddChatMedia', {
        method: 'POST',
        data: formData,
        requestType: 'form',
        ...(options || {})
    })
}

/** 生成一张图片 POST /api/Chat/AddDraw */
export async function postChatAddDraw(
    body: API.FBAiDraw,
    options?: {[key: string]: any}
) {
    return request<API.REWebApiCallback>('/api/Chat/AddDraw', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        data: body,
        ...(options || {})
    })
}

/** 发送一条消息 POST /api/Chat/AddMessage */
export async function postChatAddMessage(
    body: API.FBChatMessage,
    options?: {[key: string]: any}
) {
    return request<any>('/api/Chat/AddMessage', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        data: body,
        ...(options || {})
    })
}

/** 批量删除会话 POST /api/Chat/DeleteSessions */
export async function postChatDeleteSessions(
    body: API.FBIds,
    options?: {[key: string]: any}
) {
    return request<API.REWebApiCallback>('/api/Chat/DeleteSessions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        data: body,
        ...(options || {})
    })
}

/** 查询推荐提示词 GET /api/Chat/GetAiPrompWordByRecomment */
export async function getChatGetAiPrompWordByRecomment(
    // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
    params: API.getChatGetAiPrompWordByRecommentParams,
    options?: {[key: string]: any}
) {
    return request<API.REWebApiCallback>(
        '/api/Chat/GetAiPrompWordByRecomment',
        {
            method: 'GET',
            params: {
                ...params
            },
            ...(options || {})
        }
    )
}

/** 查询当前登录用户指定会话的消息列表 GET /api/Chat/GetChatMessageListBySelfSessionId */
export async function getChatGetChatMessageListBySelfSessionId(
    // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
    params: API.getChatGetChatMessageListBySelfSessionIdParams,
    options?: {[key: string]: any}
) {
    return request<API.REWebApiCallback>(
        '/api/Chat/GetChatMessageListBySelfSessionId',
        {
            method: 'GET',
            params: {
                ...params
            },
            ...(options || {})
        }
    )
}

/** 查询当前登录用户会话列表 GET /api/Chat/GetChatSessionListBySelf */
export async function getChatGetChatSessionListBySelf(
    // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
    params: API.getChatGetChatSessionListBySelfParams,
    options?: {[key: string]: any}
) {
    return request<API.REWebApiCallback>('/api/Chat/GetChatSessionListBySelf', {
        method: 'GET',
        params: {
            ...params
        },
        ...(options || {})
    })
}

/** 此处后端没有提供注释 GET /api/Chat/GetMjTask */
export async function getChatGetMjTask(
    // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
    params: API.getChatGetMjTaskParams,
    options?: {[key: string]: any}
) {
    return request<API.REWebApiCallback>('/api/Chat/GetMjTask', {
        method: 'GET',
        params: {
            ...params
        },
        ...(options || {})
    })
}

/** 查询所有模型 GET /api/Chat/GetModelListAll */
export async function getChatGetModelListAll(options?: {[key: string]: any}) {
    return request<API.REWebApiCallback>('/api/Chat/GetModelListAll', {
        method: 'GET',
        ...(options || {})
    })
}

/** 此处后端没有提供注释 POST /api/Chat/PostMj */
export async function postChatPostMj(options?: {[key: string]: any}) {
    return request<API.REWebApiCallback>('/api/Chat/PostMj', {
        method: 'POST',
        ...(options || {})
    })
}

/** 停止消息 POST /api/Chat/StopMessage */
export async function postChatStopMessage(
    body: API.FBId,
    options?: {[key: string]: any}
) {
    return request<API.REWebApiCallback>('/api/Chat/StopMessage', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        data: body,
        ...(options || {})
    })
}

/** 修改会话标题 POST /api/Chat/UpdateSessionTitle */
export async function postChatUpdateSessionTitle(
    body: API.FBUpdateSessionName,
    options?: {[key: string]: any}
) {
    return request<API.REWebApiCallback>('/api/Chat/UpdateSessionTitle', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        data: body,
        ...(options || {})
    })
}
