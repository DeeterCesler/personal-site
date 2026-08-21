'use client'

import { useEffect } from 'react'
import { ThemeProvider } from '@/context/ThemeContext'
import { ColorProvider } from '@/context/ColorContext'
import { ContactProvider } from '@/context/ContactContext'
import generateConsoleName from '@/utils/ConsoleName'
import '@/i18n'

export default function Providers({ children }) {
  useEffect(() => {
    generateConsoleName()
  }, [])

  return (
    <ThemeProvider>
      <ColorProvider>
        <ContactProvider>{children}</ContactProvider>
      </ColorProvider>
    </ThemeProvider>
  )
}
