import {
  Language, toggleLang
} from '@/translation/translation'

export { Language }

export function useGlobalTranslation() {
  return { toggleLang }
}
