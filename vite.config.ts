import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteTsConfig from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), viteTsConfig()],
  base: './',
})
