export default defineBackground(() => {
    // 左键点击图标 (如果有 popup 是不会触发的，可以执行 browser.action.setPopup({ popup: '' }) 来监听事件)
    browser.action.setPopup({popup: ''})

    // 监听插件图标点击事件
    browser.action.onClicked.addListener(async (tab) => {
        browser.sidePanel.open({windowId: tab.windowId})
    })
})

browser.tabs.onActivated.addListener((activeInfo) => {
    console.log('监听标签页激活事件')
})

browser.runtime.onInstalled.addListener(() => {
    console.log('监听插件安装状态')
})

// 监听content.js 发送的消息
const listenerHandle = async (message: any, sender: any, sendResponse: any) => {
    console.log(message)
    console.log(sender)
    console.log(sendResponse)
}
browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
    listenerHandle(message, sender, sendResponse).catch((error) => {
        sendResponse?.(error)
    })
    return true
})
