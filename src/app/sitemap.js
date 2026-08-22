import { ROUTE_SEO, SITE_URL, LASTMOD, SITEMAP_EXCLUDE } from '@/seo/routes'

// Generated from ROUTE_SEO at build time (static export), so adding a route to
// the SEO map automatically lists it here. lastmod comes from LASTMOD, falling
// back to the build date for any route not tracked there.
export const dynamic = 'force-static'

export default function sitemap() {
  const today = new Date().toISOString().slice(0, 10)
  return Object.keys(ROUTE_SEO)
    .filter((path) => !SITEMAP_EXCLUDE.has(path))
    .map((path) => ({
      url: path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}`,
      lastModified: LASTMOD[path] || today,
    }))
}
