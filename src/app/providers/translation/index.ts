import type { App, InjectionKey } from 'vue'
import { Language } from './language'
import { setLang, t, toggleLang } from './language'

export { Language }

export type TranslationProvider = {
  toggleLang?: () => void
}

export const translationProvider = Symbol() as InjectionKey<TranslationProvider>

export default {
  install(app: App, options: Record<'lanugage', Language>) {
    setLang(options.lanugage)
    app.config.globalProperties.t = t
    app.provide(translationProvider, { toggleLang })
  },
}
