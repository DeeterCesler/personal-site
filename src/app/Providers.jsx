'use client'

import { useEffect } from 'react'
import { ThemeProvider } from '@/context/ThemeContext'
import { ColorProvider } from '@/context/ColorContext'
import { ContactProvider } from '@/context/ContactContext'
import generateConsoleName from '@/utils/ConsoleName'
import { LanguageProvider } from '@/i18n'

export default function Providers({ children }) {
  useEffect(() => {
    generateConsoleName()
  }, [])

  return (
    <LanguageProvider>
      <ThemeProvider>
        <ColorProvider>
          <ContactProvider>{children}</ContactProvider>
        </ColorProvider>
      </ThemeProvider>
    </LanguageProvider>
  )
}
