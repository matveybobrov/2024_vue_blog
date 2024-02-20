import { ref } from 'vue'

enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

const defaultTheme = (localStorage.getItem('theme') as Theme) || Theme.LIGHT
const root = document.documentElement
root.className = defaultTheme

const theme = ref<Theme>(defaultTheme)

function toggleTheme() {
  theme.value = theme.value === Theme.DARK ? Theme.LIGHT : Theme.DARK
  root.className = theme.value
  localStorage.setItem('theme', theme.value)
}

export default function useGlobalTheme() {
  return { Theme, theme, toggleTheme }
}
