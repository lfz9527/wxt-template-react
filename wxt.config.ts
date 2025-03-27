import { defineConfig } from 'wxt';

// See https://wxt.dev/api/config.html
export default defineConfig({
  extensionApi: 'chrome',
  modules: ['@wxt-dev/module-react'],
  vite: () => ({
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true
        }
      }
    }
  }),
  manifest: {
    version: "1.0.0",
    name: "wxt-template",
    description: "这是一个 wxt-dev 的开发模板",
    permissions: [
      "activeTab",
      "tabs",
      "sidePanel"
    ],
    host_permissions: [
      "<all_urls>"
    ],
    action: {
      default_title: "Click Me",
    },
    side_panel: {
      default_path: "sidePanel/index.html"
    }
  },
});
