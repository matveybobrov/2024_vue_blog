import { ref } from 'vue'

import { translations } from '@/shared/config/translations'

export enum Language {
  RU = 'russian',
  EN = 'english',
}

export const currentLang = ref(Language.RU)

export function setLang(lang: Language): void {
  currentLang.value = lang
}
export function toggleLang(): void {
  currentLang.value = currentLang.value === Language.RU ? Language.EN : Language.RU
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
