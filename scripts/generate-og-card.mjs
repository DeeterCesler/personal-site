import sharp from 'sharp'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const outPath = resolve(__dirname, '../public/og-card.png')

const svg = `
<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0b0d12"/>
      <stop offset="100%" stop-color="#1a1f2e"/>
    </linearGradient>
    <radialGradient id="glow" cx="85%" cy="20%" r="50%">
      <stop offset="0%" stop-color="#ff5a4e" stop-opacity="0.45"/>
      <stop offset="100%" stop-color="#ff5a4e" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect width="1200" height="630" fill="url(#glow)"/>
  <text x="80" y="240" font-family="Helvetica, Arial, sans-serif" font-size="96" font-weight="700" fill="#ffffff">Deeter Cesler</text>
  <text x="80" y="320" font-family="Helvetica, Arial, sans-serif" font-size="40" font-weight="400" fill="#c9cdd6">product engineer, copywriter,</text>
  <text x="80" y="372" font-family="Helvetica, Arial, sans-serif" font-size="40" font-weight="400" fill="#c9cdd6">guerrilla marketer</text>
  <text x="80" y="560" font-family="Helvetica, Arial, sans-serif" font-size="28" font-weight="500" fill="#ff5a4e">deetercesler.com</text>
</svg>
`

await sharp(Buffer.from(svg))
  .png()
  .toFile(outPath)

console.log('OG card written to', outPath)
