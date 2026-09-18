'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import Script from 'next/script'

const gaId = process.env.NEXT_PUBLIC_GA_ID

// gtag.js straight from Google, loaded via next/script instead of the react-ga4
// wrapper (~12KB of JS that only forwarded these two calls). afterInteractive
// keeps the old timing: the tag lands right after hydration, so short sessions
// still register.
export default function Analytics() {
  const pathname = usePathname()
  const lastPath = useRef(null)

  useEffect(() => {
    if (!gaId) return
    // The gtag('config') call below reports the page the visitor landed on, so
    // the first pathname is only recorded here, not sent twice.
    if (lastPath.current === null) {
      lastPath.current = pathname
      return
    }
    if (lastPath.current === pathname) return
    lastPath.current = pathname
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'page_view', { page_path: pathname })
    }
  }, [pathname])

  if (!gaId) return null

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];
function gtag(){dataLayer.push(arguments);}
window.gtag=gtag;
gtag('js',new Date());
gtag('config','${gaId}');`}
      </Script>
    </>
  )
}
