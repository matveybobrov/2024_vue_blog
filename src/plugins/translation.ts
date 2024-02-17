import type { App } from 'vue'

import { t } from '@/translation/translation'

export default {
  install(app: App) {
    // eslint-disable-next-line no-param-reassign
    app.config.globalProperties.t = t
  },
}
