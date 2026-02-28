import uid from "tiny-uid"
import MessageBus from '@/messages/message'

export default defineBackground(() => {
    MessageBus.registerListener()
    // 左键点击图标 (如果有 popup 是不会触发的，可以执行 browser.action.setPopup({ popup: '' }) 来监听事件)
    browser.action.setPopup({ popup: '' })

    // 监听插件图标点击事件
    browser.action.onClicked.addListener(async (tab) => {
        browser.sidePanel.open({ windowId: tab.windowId })
    })
})


browser.tabs.onActivated.addListener((activeInfo) => {
    console.log('监听标签页激活事件')
})

browser.runtime.onInstalled.addListener(() => {
    console.log('监听插件安装状态')
})

MessageBus.on('content_bg', () => {
    console.log('content_bg', uid())
})