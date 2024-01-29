import type { App } from 'vue'

import router, { Routes } from '../router'

export default {
  install(app: App) {
    // eslint-disable-next-line no-param-reassign
    app.config.errorHandler = (error) => {
      // eslint-disable-next-line no-console
      console.error(error)
      router.replace(Routes.ERROR)
    }
  }
}
