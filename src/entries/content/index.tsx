import ReactDOM from 'react-dom/client'
import {ContentScriptContext} from 'wxt/client'
import './style.css'
import Content from '@/content'

console.log(browser.runtime.getURL('/sidepanel.html'))

export default defineContentScript({
    matches: ['<all_urls>'],
    cssInjectionMode: 'ui',
    async main(ctx) {
        console.log('脚本加载成功')
        const comHover = await createShadowUi(ctx)
        comHover.mount()
    }
})

async function createShadowUi(ctx: ContentScriptContext) {
    const hoverMask = await createShadowRootUi(ctx, {
        name: 'wxt-template',
        position: 'inline',
        anchor: 'body',
        isolateEvents: false,
        onMount(container) {
            const wrapper = document.createElement('div')
            wrapper.id = 'app'
            container.append(wrapper)
            const root = ReactDOM.createRoot(wrapper)
            root.render(<Content />)
            return {
                root,
                wrapper
            }
        },
        onRemove: (elements) => {
            elements?.root.unmount()
            elements?.wrapper.remove()
        }
    })
    return hoverMask
}
