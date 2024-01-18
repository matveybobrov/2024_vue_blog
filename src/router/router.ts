import { createRouter, createWebHistory } from 'vue-router'

// Use lazy loading for routes
const routes = [
  { path: '/', component: () => import('@/pages/MainPage.vue') },
  { path: '/about', component: () => import('@/pages/AboutPage.vue') },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
