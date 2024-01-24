import { ref } from 'vue'
// Перечисление (набор именованных констант). Theme.LIGHT будет возвращать "light"
export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}
const defaultTheme = (localStorage.getItem('theme') as Theme) || Theme.LIGHT

export const theme = ref<Theme>(defaultTheme)

export function toggleTheme() {
  theme.value = theme.value === Theme.DARK ? Theme.LIGHT : Theme.DARK
  localStorage.setItem('theme', theme.value)
}
