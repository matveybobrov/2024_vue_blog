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
function toggleLang(): void {
  currentLang.value = currentLang.value === Language.RU ? Language.EN : Language.RU
}

function t(text: string): string {
  switch (currentLang.value) {
  case Language.RU:
    return text
  case Language.EN:
    return translations[text] ?? text
  default:
    return text
  }
}

export {
  currentLang, setLang, t, toggleLang
}
