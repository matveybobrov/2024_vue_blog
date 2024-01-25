import { Theme, theme, toggleTheme } from './theme'

// Синглтон (аналог стора), так как сущности создаются вне хука
// и существуют сами по себе в единственном экземпляре.
// Мне такой подход показался удобнее, чем provide/inject,
// так как приходится писать меньше бойлерплейта
export function useGlobalTheme() {
  return { Theme, theme, toggleTheme }
}
