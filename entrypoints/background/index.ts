import { actionEnum } from '~/entrypoints/common/constants'
import { get, post, } from '~/entrypoints/common/services/request'
import type { ResponseData } from '~/entrypoints/common/services/request'
import { SendBrowserMessageType, FetchType, FetchResponse } from '~/entrypoints/types'


const fetchMethodMap: Record<FetchType, Function> = {
  get,
  post
}

export default defineBackground(() => {

  // 左键点击图标 (如果有 popup 是不会触发的，可以执行 browser.action.setPopup({ popup: '' }) 来监听事件)
  browser.action.setPopup({ popup: "" });

  // 监听插件图标点击事件
  browser.action.onClicked.addListener(async (tab) => { });
});



// 监听标签页激活事件
browser.tabs.onActivated.addListener((activeInfo) => {
  // 每个tab 的 content.js 是隔离开的需要单独监听发消息
  browser.scripting.executeScript({
    target: { tabId: activeInfo.tabId },
    files: ['content-scripts/content.js']
  }).then(() => {
    // 发送消息
    browser.tabs.sendMessage(activeInfo.tabId, { type: actionEnum.TAB_ACTIVE, tab: activeInfo });
  }).catch((err) => {
    console.error('Failed to inject content.js:', err);
  });

})

// 在sw 中请求防止跨域
const request = (methodFn: Function, data: Record<string, any>, callback: (response: FetchResponse) => void) => {
  const {
    url,
    data: reqData = {},
    header = {}
  } = data
  methodFn(url, reqData, header)
    .then((result: ResponseData) => {
      callback(result);
    })
    .catch((error: any) => {
      callback({ error: error.message || 'Request failed' });
    });
}


browser.runtime.onInstalled.addListener(() => {
  browser.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    console.log(2234);

    if (tabs.length > 0) {
      const tab = tabs[0];
      chrome.sidePanel.open({ windowId: tab.windowId });
    }
  });
});

// 监听content.js 发送的消息
browser.runtime.onMessage.addListener((message: SendBrowserMessageType, sender, sendResponse) => {
  const { type, data } = message

  // 打开侧边栏
  if (type === "open-side") {
    const { tab } = sender
    const { id, windowId } = tab as Record<string, any>

    browser.sidePanel.open({
      tabId: id,
      windowId
    })


  } else
    // 关闭侧边栏
    if (type === "close-side") {
      browser.sidePanel.setOptions({ enabled: false });
      browser.sidePanel.setOptions({ enabled: true });

    } else
      // 接口请求
      if (type in fetchMethodMap) {
        const fetch = fetchMethodMap[type as FetchType];
        request(fetch, data, sendResponse)
        return true
      }

})