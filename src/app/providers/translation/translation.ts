import { ref } from 'vue'

import { translations } from '@/shared/config/translations'

export enum Language {
  RU = 'russian',
  EN = 'english',
}

const defaultLanguage = (localStorage.getItem('language') as Language) || Language.RU
export const currentLang = ref(defaultLanguage)

export function setLang(lang: Language): void {
  currentLang.value = lang
  localStorage.setItem('language', currentLang.value)
}
export function toggleLang(): void {
  switch (currentLang.value) {
  case Language.RU:
    setLang(Language.EN)
    break
  case Language.EN:
    setLang(Language.RU)
    break
  default:
    setLang(Language.RU)
  }
}

export function t(text: string): string {
  switch (currentLang.value) {
  case Language.RU:
    return text
  case Language.EN:
    return translations[text] ?? text
  default:
    return text
  }
}
