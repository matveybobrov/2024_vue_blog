import type { App } from 'vue'

import {
  Language, setLang, t, toggleLang
} from './translation'

export { Language }

export function useTranslation() {
  return { toggleLang }
}

export default {
  install(app: App, options: Record<'language', Language>) {
    setLang(options.language)
    // eslint-disable-next-line no-param-reassign
    app.config.globalProperties.t = t
  },
}
