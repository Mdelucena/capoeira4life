import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import pt from './locales/pt.json'
import en from './locales/en.json'
import es from './locales/es.json'
import it from './locales/it.json'

export const languages = ['en', 'pt', 'es', 'it'] as const
export type Language = (typeof languages)[number]

const STORAGE_KEY = 'capoeira4life-lang'

function getSavedLanguage(): Language {
  const saved = localStorage.getItem(STORAGE_KEY)
  if (saved && languages.includes(saved as Language)) {
    return saved as Language
  }

  return 'en'
}

i18n.use(initReactI18next).init({
  resources: {
    pt: { translation: pt },
    en: { translation: en },
    es: { translation: es },
    it: { translation: it },
  },
  lng: getSavedLanguage(),
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
})

i18n.on('languageChanged', (lng) => {
  localStorage.setItem(STORAGE_KEY, lng)
  document.documentElement.lang = lng === 'pt' ? 'pt-BR' : lng
})

document.documentElement.lang =
  i18n.language === 'pt' ? 'pt-BR' : i18n.language

export default i18n
