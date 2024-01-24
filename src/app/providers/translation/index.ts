import type { App, InjectionKey } from 'vue'

import {
    Language, setLang, t, toggleLang
} from './language'

export { Language }

export type TranslationProvider = {
  toggleLang?: () => void
}

export const translationProvider = Symbol(
    'translationProvider'
) as InjectionKey<TranslationProvider>

export default {
    install(app: App, options: Record<'language', Language>) {
        setLang(options.language)
        // eslint-disable-next-line no-param-reassign
        app.config.globalProperties.t = t
        app.provide(translationProvider, { toggleLang })
    },
}
