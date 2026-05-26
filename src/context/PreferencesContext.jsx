import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'
import translations from '../content/siteCopy'

const PreferencesContext = createContext(null)

const readPreference = (key, fallback) => {
  try {
    return window.localStorage.getItem(key) || fallback
  } catch (error) {
    return fallback
  }
}

export const PreferencesProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => readPreference('portfolio-language', 'en'))
  const [theme, setTheme] = useState(() => readPreference('portfolio-theme', 'dark'))
  const copy = translations[language] || translations.en

  useEffect(() => {
    document.documentElement.lang = language === 'ja' ? 'ja' : 'en'
    document.documentElement.dataset.theme = theme
    document.title = copy.meta.title
    document.querySelector('meta[name="description"]')?.setAttribute('content', copy.meta.description)

    try {
      window.localStorage.setItem('portfolio-language', language)
      window.localStorage.setItem('portfolio-theme', theme)
    } catch (error) {
      // Browser storage can be unavailable in private or embedded contexts.
    }
  }, [copy, language, theme])

  const value = useMemo(() => ({
    copy,
    language,
    theme,
    setLanguage,
    setTheme,
    toggleLanguage: () => setLanguage((current) => (current === 'en' ? 'ja' : 'en')),
    toggleTheme: () => setTheme((current) => (current === 'dark' ? 'light' : 'dark'))
  }), [copy, language, theme])

  return <PreferencesContext.Provider value={value}>{children}</PreferencesContext.Provider>
}

export const usePreferences = () => useContext(PreferencesContext)
