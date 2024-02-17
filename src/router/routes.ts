import type { Component } from 'vue'

export enum Routes {
  MAIN = '/',
  ABOUT = '/about',
  ERROR = '/error',
  NOT_FOUND = '/:pathMatch(.*)*'
}

export enum Layouts {
  CLEAR = 'Clear',
  MAIN = 'Main'
}

export type Route = {
  // Use only routes defined in enum
  path: Routes
  // Use lazy loading for routes
  component: () => Promise<Component>
  name?: string
  // Use only layoutes defined in enum
  meta?: Record<'layout', Layouts>
}

export const routes: Route[] = [
  {
    path: Routes.MAIN,
    component: () => import('@/pages/MainPage')
  },
  {
    path: Routes.ABOUT,
    component: () => import('@/pages/AboutPage')
  },
  {
    path: Routes.ERROR,
    component: () => import('@/pages/ErrorPage'),
    meta: { layout: Layouts.CLEAR }
  },
  {
    path: Routes.NOT_FOUND,
    component: () => import('@/pages/NotFoundPage')
  }
]
