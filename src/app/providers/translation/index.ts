import type { App, InjectionKey } from 'vue'
import { Language } from './language'
import useTranslation from './language'

export type TranslationProvider = {
  toggleLang?: () => void
}

export const translationProvider = Symbol() as InjectionKey<TranslationProvider>

export default {
  install(app: App) {
    const { t, toggleLang } = useTranslation(Language.RU)
    app.config.globalProperties.t = t
    app.provide(translationProvider, { toggleLang })
  },
}
