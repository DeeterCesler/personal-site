import React from 'react'
import { Helmet } from 'react-helmet-async'
import { useLocation } from 'react-router-dom'
import { SITE, SITE_URL, DEFAULT_OG_IMAGE, getRouteSeo } from '../seo/routes'

const Seo = ({ title, description, image, type = 'website', children }) => {
  const { pathname } = useLocation()
  const fallback = getRouteSeo(pathname)
  const finalTitle = title || fallback.title
  const finalDescription = description || fallback.description
  const finalImage = image || DEFAULT_OG_IMAGE
  const canonical = `${SITE_URL}${pathname === '/' ? '/' : pathname}`

  return (
    <Helmet>
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      <link rel="canonical" href={canonical} />

      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:image" content={finalImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@DeeterCesler" />
      <meta name="twitter:creator" content="@DeeterCesler" />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={finalImage} />
      {children}
    </Helmet>
  )
}

export default Seo
