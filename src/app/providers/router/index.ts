import { createRouter, createWebHistory } from 'vue-router'

import { Routes, routes } from './routes'

export const router = createRouter({
    history: createWebHistory(),
    routes,
})

export { Routes }
