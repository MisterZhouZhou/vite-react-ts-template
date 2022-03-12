import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
import reactRefresh from '@vitejs/plugin-react-refresh'
// alias配置
import tsconfigPaths from 'vite-tsconfig-paths'
import { resolve } from 'path'
import { apiAddress, proxyApi } from './src/config'

// https://vitejs.dev/config/
export default defineConfig({
  base: './', //  生产环境资源路径
  server: {
    port: 3000,
    proxy: {
      [proxyApi]: {
        target: apiAddress,
        changeOrigin: true,
        cookieDomainRewrite: '',
        secure: false,
        rewrite: (p) => p.replace(/^\/api/, '')
      }
    }
  },
  css: {
    // css预处理
    preprocessorOptions: {
      less: {
        additionalData: '@import "./src/styles/test.less";',
        modifyVars: {
          'primary-color': '#1DA57A',
          // 用于全局导入，以避免需要单独导入每个样式文件。
          // reference:  避免重复引用
          hack: `true; @import (reference) "${resolve('src/styles/global.less')}";`
        },
        javascriptEnabled: true
      }
    },
    modules: {
      // 样式小驼峰转化,
      localsConvention: 'camelCase'
    }
  },
  plugins: [reactRefresh(), tsconfigPaths()]
})
