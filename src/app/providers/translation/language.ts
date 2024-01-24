import { ref } from 'vue'

import { translations } from '@/shared/config/translations'

export enum Language {
  RU = 'russian',
  EN = 'english',
}

const currentLang = ref(Language.RU)

function setLang(lang: Language): void {
  currentLang.value = lang
}

function t(text: string): string {
  const lang = currentLang.value
  if (lang === Language.RU) return text
  const translation = translations[text]
  return translation
}

function toggleLang(): void {
  currentLang.value = currentLang.value === Language.RU ? Language.EN : Language.RU
}

export {
  currentLang, setLang, t, toggleLang
}
