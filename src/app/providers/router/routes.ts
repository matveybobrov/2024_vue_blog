import type { Component } from 'vue'

export enum Routes {
  MAIN = '/',
  ABOUT = '/about',
  NOT_FOUND = '/:pathMatch(.*)*'
}

export type Route = {
  // Use only routes defined in enum
  path: Routes
  // Use lazy loading for routes
  component: () => Promise<Component>
  name?: string
}

export const routes: Route[] = [
  { path: Routes.MAIN, component: () => import('@/pages/MainPage') },
  { path: Routes.ABOUT, component: () => import('@/pages/AboutPage') },
  { path: Routes.NOT_FOUND, component: () => import('@/pages/NotFoundPage') }
]
