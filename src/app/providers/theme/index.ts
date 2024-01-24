import type { App, InjectionKey } from 'vue'

import { Theme, theme, toggleTheme } from './theme'

export type ThemeProvider = {
  theme?: typeof theme
  toggleTheme?: typeof toggleTheme
  Theme?: typeof Theme
}

export const themeProvider = Symbol('themeProvider') as InjectionKey<ThemeProvider>

export default {
  install(app: App) {
    app.provide(themeProvider, { theme, toggleTheme, Theme })
  },
}
