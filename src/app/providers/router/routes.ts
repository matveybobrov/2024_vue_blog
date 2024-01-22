import type { Component } from 'vue'

enum Routes {
  MAIN = '/',
  ABOUT = '/about',
}

type Route = {
  // Use only routes defined in enum
  path: Routes
  // Use lazy loading for routes
  component: () => Promise<Component>
  name?: string
}

const routes: Route[] = [
  { path: Routes.MAIN, component: () => import('@/pages/MainPage') },
  { path: Routes.ABOUT, component: () => import('@/pages/AboutPage') },
]

export default routes
