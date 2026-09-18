'use client'

import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'

import en from './locales/en.json'
import de from './locales/de.json'
import es from './locales/es.json'
import fr from './locales/fr.json'
import ja from './locales/ja.json'
import ko from './locales/ko.json'
import zh from './locales/zh.json'

// Replaces i18next + react-i18next + i18next-browser-languagedetector, which
// were roughly 40KB of JS to translate 22 strings. All seven locale files
// together are about 5KB, so they stay bundled rather than being fetched.
const LOCALES = { en, de, es, fr, ja, ko, zh }
const FALLBACK = 'en'
// Same key i18next-browser-languagedetector cached under, so anyone who
// already has a language stored keeps it.
const STORAGE_KEY = 'i18nextLng'

const lookup = (dict, key) =>
  key.split('.').reduce((node, part) => (node == null ? undefined : node[part]), dict)

// Falls back per key rather than per locale, so a string missing from one
// translation shows the English copy instead of the raw key.
export const translate = (lang, key) => {
  const hit = lookup(LOCALES[lang] || LOCALES[FALLBACK], key)
  if (typeof hit === 'string') return hit
  const fallback = lookup(LOCALES[FALLBACK], key)
  return typeof fallback === 'string' ? fallback : key
}

export const detectLanguage = () => {
  if (typeof window === 'undefined') return FALLBACK
  let stored
  try {
    stored = window.localStorage.getItem(STORAGE_KEY)
  } catch (e) {
    // Private mode or blocked storage; fall through to the browser's list.
  }
  const candidates = [stored, ...(navigator.languages || [navigator.language])]
  for (const tag of candidates) {
    if (!tag) continue
    const base = String(tag).toLowerCase().split('-')[0]
    if (LOCALES[base]) return base
  }
  return FALLBACK
}

const LanguageContext = createContext(FALLBACK)

export function LanguageProvider({ children }) {
  // The first client render stays English so it matches the statically
  // exported HTML; the detected language lands immediately after hydration.
  const [lang, setLang] = useState(FALLBACK)

  useEffect(() => {
    const detected = detectLanguage()
    if (detected !== FALLBACK) setLang(detected)
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  return <LanguageContext.Provider value={lang}>{children}</LanguageContext.Provider>
}

export function useTranslation() {
  const lang = useContext(LanguageContext)
  return useMemo(() => ({ lang, t: (key) => translate(lang, key) }), [lang])
}

// Minimal stand-in for react-i18next's <Trans>: the only markup any locale
// string carries is <bold>, rendered as <strong>.
const BOLD = /<bold>(.*?)<\/bold>/g

export function Trans({ i18nKey }) {
  const { lang } = useTranslation()
  const text = translate(lang, i18nKey)
  const parts = []
  let cursor = 0
  let match
  BOLD.lastIndex = 0
  while ((match = BOLD.exec(text)) !== null) {
    if (match.index > cursor) parts.push(text.slice(cursor, match.index))
    parts.push(<strong key={match.index}>{match[1]}</strong>)
    cursor = match.index + match[0].length
  }
  if (cursor < text.length) parts.push(text.slice(cursor))
  return <>{parts}</>
}
