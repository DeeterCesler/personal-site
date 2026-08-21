'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import ReactGA from 'react-ga4'

const gaId = process.env.NEXT_PUBLIC_GA_ID

let initialized = false

export default function Analytics() {
  const pathname = usePathname()

  useEffect(() => {
    if (!gaId) return
    if (!initialized) {
      ReactGA.initialize(gaId)
      initialized = true
    }
    ReactGA.send({ hitType: 'pageview', page: pathname })
  }, [pathname])

  return null
}
