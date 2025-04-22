import {defineConfig} from 'wxt'
import type {WxtViteConfig} from 'wxt'

// vite配置
const viteConfig: WxtViteConfig = {
    css: {
        preprocessorOptions: {
            less: {
                javascriptEnabled: true
            }
        }
    },
    resolve: {
        alias: {
            '@': './src',
            '@/components': './src/components',
            '@/assets': './src/assets',
            '@/content': './src/content'
        }
    }
}

// 浏览器manifest 配置
const manifest = {
    version: '1.0.0',
    name: 'wxt-template',
    description: '这是一个 wxt-dev 的开发模板',
    permissions: ['activeTab', 'tabs', 'sidePanel'],
    host_permissions: ['<all_urls>'],
    // icons: {
    //     '16': 'icon/16.png',
    //     '32': 'icon/32.png',
    //     '48': 'icon/48.png',
    //     '96': 'icon/96.png',
    //     '128': 'icon/128.png'
    // },
    action: {
        default_title: 'Click Me'
    },
    side_panel: {
        default_path: 'sidePanel/index.html'
    }
}

// See https://wxt.dev/api/config.html
export default defineConfig({
    srcDir: 'src',
    entrypointsDir: 'entries',
    extensionApi: 'chrome',
    publicDir: 'public',
    outDir: 'dist',
    modules: ['@wxt-dev/module-react'],
    vite: () => viteConfig,
    manifest
})
