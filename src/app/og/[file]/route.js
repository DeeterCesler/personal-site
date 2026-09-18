import { renderOgImage } from '@/seo/ogImage'
import { BLOG_POSTS } from '@/seo/routes'

// Emits out/og/<slug>.png for every blog post at build time. The .png is part
// of the param so the exported file has a real extension for Netlify.
export const dynamic = 'force-static'
export const dynamicParams = false

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ file: `${p.split('/').pop()}.png` }))
}

export async function GET(_req, { params }) {
  const { file } = await params
  return renderOgImage(`/blog/${file.replace(/\.png$/, '')}`)
}
