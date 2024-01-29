import { createRouter, createWebHistory } from 'vue-router'

import { Routes, routes } from './routes'

const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router

export { Routes }
