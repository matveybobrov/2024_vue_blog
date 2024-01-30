// Makes it able to use test property on vite config to configure vitest
/// <reference types="vitest" />

import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import svgLoader from 'vite-svg-loader'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), svgLoader()],
  test: {
    // Enables global vitest variables without need to import it
    globals: true,
    watch: false,
    // Needed to render components in tests
    environment: 'happy-dom',
    // Imports types to use .toBeInTheDocument()
    setupFiles: ['./setup.vitest.ts'],
  },
  resolve: {
    // @ will be replaced with ./src in imports when running eslint
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
