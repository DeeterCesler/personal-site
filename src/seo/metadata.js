import { SITE, SITE_URL, DEFAULT_OG_IMAGE, getRouteSeo } from './routes'

// Builds a Next.js Metadata object for a given route from the ROUTE_SEO map.
// This replaces the old client-side react-helmet <Seo> component: the same tags
// are now emitted server-side into each statically exported page's <head>.
export function buildMetadata(pathname, overrides = {}) {
  const base = getRouteSeo(pathname)
  const title = overrides.title || base.title
  const description = overrides.description || base.description
  const image = overrides.image || DEFAULT_OG_IMAGE
  const type = overrides.type || 'website'
  const canonical = pathname === '/' ? '/' : pathname

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      type,
      siteName: SITE,
      url: canonical,
      title,
      description,
      images: [image],
    },
    twitter: {
      card: 'summary_large_image',
      site: '@DeeterCesler',
      creator: '@DeeterCesler',
      title,
      description,
      images: [image],
    },
  }
}

export { SITE_URL }
