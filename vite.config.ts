// Makes it able to use test property on vite config to configure vitest
/// <reference types="vitest" />

import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), svgLoader()],
  test: {
    globals: true,
    watch: false,
    environment: 'happy-dom'
  },
  resolve: {
    // In imports @ will be replaced with ./src
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
