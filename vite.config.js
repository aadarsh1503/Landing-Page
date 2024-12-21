import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build',
  },
  server: {
    proxy: {
      '/api': {
        target: '', // The base URL of your API
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''), // Remove `/api` prefix when forwarding the request
      },
    },
  },
})
