import {defineConfig} from 'wxt'
import type {WxtViteConfig} from 'wxt'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

const resolve = (dir: string) => path.join(__dirname, dir)
// vite配置
const viteConfig: WxtViteConfig = {
    plugins: [tailwindcss()],
    resolve: {
        alias: {
            '@': resolve('src'),
            '@assets': resolve('src/assets'),
            '@constants': resolve('src/constants'),
            '@components': resolve('src/components'),
            '@content': resolve('src/content'),
            '@sidePanel': resolve('src/sidePanel'),
            '@background': resolve('src/background'),
            '@hooks': resolve('src/hooks'),
            '@utils': resolve('src/utils'),
            '@services': resolve('src/services')
        }
    }
}

// 浏览器manifest 配置
const manifest = {
    version: '1.0.0',
    name: 'wxt-template',
    description: '这是一个 wxt-dev 的开发模板',
    permissions: ['activeTab', 'tabs', 'sidePanel', 'storage'],
    host_permissions: ['<all_urls>'],
    icons: {
        '16': 'icon/16.png',
        '32': 'icon/32.png',
        '48': 'icon/48.png',
        '96': 'icon/96.png',
        '128': 'icon/128.png'
    },
    action: {
        default_title: 'Click Me'
    },
    side_panel: {
        default_path: 'sidePanel/index.html'
    }
}

export default defineConfig({
    srcDir: 'src',
    entrypointsDir: 'entries',
    modules: ['@wxt-dev/module-react'],
    vite: () => viteConfig,
    manifest,
    // @ts-ignore
    webExt: {
        chromiumArgs: [
            '--disable-features=DisableLoadExtensionCommandLineSwitch'
        ]
    }
})
