import { translations } from '@/shared/config/translations';

import { Language, setLang, t } from './translation';

beforeEach(() => {
  translations['тест'] = 'test'
})
afterAll(() => {
  delete translations['тест']
})

describe('translation', () => {
  test('works correctly with existing translation in Russian', () => {
    setLang(Language.RU)
    expect(t('тест')).toBe('тест')
  })

  test('works correctly with existing translation in English', () => {
    setLang(Language.EN)
    expect(t('тест')).toBe('test')
  })

  test("returns original text if translation doesn't exist", () => {
    setLang(Language.EN)
    delete translations['тест']
    expect(t('тест')).toBe('тест')
  })
})
