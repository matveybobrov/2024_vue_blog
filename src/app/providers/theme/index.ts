import type { App, InjectionKey } from 'vue'
import { theme, toggleTheme, Theme } from './theme'

export type ThemeProvider = {
  theme?: typeof theme
  toggleTheme?: typeof toggleTheme
  Theme?: typeof Theme
}

export const themeProvider = Symbol() as InjectionKey<ThemeProvider>

export default {
  install(app: App) {
    app.provide(themeProvider, { theme, toggleTheme, Theme })
  },
}
