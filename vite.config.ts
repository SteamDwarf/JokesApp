import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      assets: '/src/assets/',
      app: '/src/app/',
      widgets: '/src/widgets/',
      features: '/src/features/',
      entities: '/src/entities/',
      shared: '/src/shared/',
    }
  }
})
