import { ref } from 'vue'
import translations from './translations'

export enum Language {
  RU = 'russian',
  EN = 'english',
}

function useTranslation(lang: Language) {
  const currentLang = ref(lang)

  function t(text: string): string {
    const lang = currentLang.value
    if (lang === Language.RU) return text
    const translation = translations[text]
    return translation
  }

  function toggleLang(): void {
    currentLang.value = currentLang.value === Language.RU ? Language.EN : Language.RU
  }

  return { t, toggleLang }
}

export default useTranslation
