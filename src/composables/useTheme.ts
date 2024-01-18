import { ref } from 'vue'
// Перечисление (набор именованных констант). Theme.LIGHT будет возвращать "light"
enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

export function useTheme() {
  const defaultTheme = (localStorage.getItem('theme') as Theme) || Theme.LIGHT

  const theme = ref<Theme>(defaultTheme)

  function toggleTheme() {
    theme.value = theme.value === Theme.DARK ? Theme.LIGHT : Theme.DARK
    localStorage.setItem('theme', theme.value)
  }

  return { theme, toggleTheme }
}
