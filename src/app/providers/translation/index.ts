import type { App } from 'vue'

import {
  Language, t, toggleLang
} from './translation'

export { Language }

export function useGlobalTranslation() {
  return { toggleLang }
}

export default {
  install(app: App) {
    // eslint-disable-next-line no-param-reassign
    app.config.globalProperties.t = t
  },
}
