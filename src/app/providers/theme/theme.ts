import { ref } from 'vue'

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

const defaultTheme = (localStorage.getItem('theme') as Theme) || Theme.LIGHT
const root = document.documentElement
root.className = defaultTheme

export const theme = ref<Theme>(defaultTheme)

export function toggleTheme() {
  theme.value = theme.value === Theme.DARK ? Theme.LIGHT : Theme.DARK
  root.className = theme.value
  localStorage.setItem('theme', theme.value)
}
