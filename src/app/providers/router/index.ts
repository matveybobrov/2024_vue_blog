import { createRouter, createWebHistory } from 'vue-router'
import { routes, Routes } from './routes'

export const router = createRouter({
  history: createWebHistory(),
  routes,
})

export { Routes }
