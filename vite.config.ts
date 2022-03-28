import { defineConfig } from 'vite'
//import react from '@vitejs/plugin-react'
import reactRefresh from '@vitejs/plugin-react-refresh'
// alias配置
import tsconfigPaths from 'vite-tsconfig-paths'
import { apiAddress, proxyApi } from './src/config'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [reactRefresh(), tsconfigPaths()],
	base: './', //  生产环境资源路径
	server: {
		host: true,
		port: 3000,
		hmr: {
			overlay: false
		},
		proxy: {
			[proxyApi]: {
				target: apiAddress,
				changeOrigin: true,
				cookieDomainRewrite: '',
				secure: false,
				rewrite: p => p.replace(/^\/api/, '')
			}
		}
	}
})
