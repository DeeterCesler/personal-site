import { ImageResponse } from 'next/og'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { SITE, getRouteSeo } from './routes'

// Inter (OFL), so titles render bold like public/og-card.png; Satori's built-in
// font only ships a regular weight.
const fontDir = join(process.cwd(), 'src/seo/fonts')
const fonts = Promise.all([400, 700].map(async (weight) => ({
  name: 'Inter',
  data: await readFile(join(fontDir, `inter-latin-${weight}.woff`)),
  weight,
  style: 'normal',
})))

export const OG_SIZE = { width: 1200, height: 630 }

// Route titles carry a " | Deeter Cesler" suffix for the <title> tag; the card
// shows the name separately, so drop it here.
export function ogTitle(pathname) {
  return getRouteSeo(pathname).title.replace(` | ${SITE}`, '')
}

// Per-post Open Graph card, rendered at build time. Styled to match
// public/og-card.png (dark backdrop, red glow top right, red domain footer).
export async function renderOgImage(pathname) {
  const title = ogTitle(pathname)
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '80px',
          color: '#ffffff',
          fontFamily: 'Inter',
          backgroundColor: '#12151c',
          backgroundImage:
            'radial-gradient(circle at 85% 20%, rgba(150, 50, 50, 0.85) 0%, rgba(18, 21, 28, 0) 55%)',
        }}
      >
        <div
          style={{
            display: 'flex',
            fontSize: title.length > 40 ? 72 : 88,
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            maxWidth: '1000px',
            marginTop: '40px',
          }}
        >
          {title}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{ display: 'flex', fontSize: 40, color: '#c9ccd4' }}>{SITE}</div>
          <div style={{ display: 'flex', fontSize: 32, color: '#f0564a' }}>deetercesler.com</div>
        </div>
      </div>
    ),
    { ...OG_SIZE, fonts: await fonts },
  )
}
