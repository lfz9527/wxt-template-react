import ReactDOM from 'react-dom/client'
import type {IsolatedWorldContentScriptDefinition} from 'wxt'
import '@assets/css/tailwind.css'
import Content from '@content/index'

type ContentScriptContext = Parameters<
    IsolatedWorldContentScriptDefinition['main']
>[0]

/**
 * 创建基础应用
 * @param ctx ContentScriptContext
 * @returns
 */
const createBaseApp = (ctx: ContentScriptContext) => async () => {
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

export default defineContentScript({
    matches: ['<all_urls>'],
    cssInjectionMode: 'ui',
    async main(ctx: ContentScriptContext) {
        console.log('脚本加载成功')
        createBaseApp(ctx)
    }
})
