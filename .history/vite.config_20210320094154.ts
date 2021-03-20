import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/jg2/",
  build: {
    outDir: "jg2",
  },
  plugins: [vue()]
})
