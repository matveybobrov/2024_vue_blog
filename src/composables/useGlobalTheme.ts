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

// Синглтон (аналог стора), так как сущности создаются вне хука
// и существуют сами по себе в единственном экземпляре.
// Мне такой подход показался удобнее, чем provide/inject,
// так как приходится писать меньше бойлерплейта
export default function useGlobalTheme() {
  return { Theme, theme, toggleTheme }
}
