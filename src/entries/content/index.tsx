import ReactDOM from 'react-dom/client'
import {ContentScriptContext} from 'wxt/client'
import '@assets/css/tailwind.css'
import Content from '@content/index'

export default defineContentScript({
    matches: ['<all_urls>'],
    cssInjectionMode: 'ui',
    async main(ctx) {
        console.log('脚本加载成功')
        await createBaseApp(ctx)
    }
})

async function createBaseApp(ctx: ContentScriptContext) {
    const App = await createShadowRootUi(ctx, {
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
    App.mount()
    return App
}
