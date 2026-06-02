import { fileURLToPath } from 'node:url'
import { dirname, resolve, join } from 'node:path'
import { mkdir, writeFile } from 'node:fs/promises'
import { preview } from 'vite'
import puppeteer from 'puppeteer'

const __dirname = dirname(fileURLToPath(import.meta.url))
const rootDir = resolve(__dirname, '..')
const distDir = resolve(rootDir, 'dist')

const ROUTES = [
  '/',
  '/work',
  '/blog',
  '/now',
  '/slop',
  '/dungeon',
  '/psychedelic',
  '/privacy',
  '/norse/privacy',
  '/grouppray/privacy',
  '/blog/junior',
  '/blog/senior',
  '/blog/security',
  '/blog/startups-vs-big-tech',
  '/blog/immutability',
  '/blog/bdd',
  '/blog/tdd',
  '/blog/looping',
  '/blog/bootstrap-flexbox-css-grid',
]

const PORT = 4173
const ORIGIN = `http://localhost:${PORT}`

const server = await preview({
  root: rootDir,
  preview: { port: PORT, strictPort: true },
})

const browser = await puppeteer.launch({ headless: true })

async function snapshot(pathname) {
  const page = await browser.newPage()
  try {
    page.setDefaultNavigationTimeout(30000)
    await page.setRequestInterception(true)
    page.on('request', (req) => {
      const t = req.resourceType()
      if (t === 'image' || t === 'media' || t === 'font') return req.abort()
      req.continue()
    })
    const url = `${ORIGIN}${pathname}`
    await page.goto(url, { waitUntil: 'networkidle0' })
    // Wait until the lazy-loaded route component has mounted (real markup, not Suspense fallback)
    // and Helmet has populated canonical/title. Helmet commits client-side via rAF, which can be
    // slow on a loaded machine, so give it generous headroom (the retry below covers the rest).
    await page.waitForFunction(
      () => {
        const root = document.querySelector('#root')
        if (!root) return false
        // Real route content always has more than just the empty Suspense fallback.
        const hasRealContent =
          !!root.querySelector('main, h1, h2, canvas, .blog-container, .home, [data-page]')
        const hasMeta =
          !!document.querySelector('link[rel="canonical"][data-rh="true"]') &&
          document.title.length > 0
        return hasRealContent && hasMeta
      },
      { timeout: 30000 }
    )
    // One more tick so any final Helmet merge across nested components settles.
    await new Promise((r) => setTimeout(r, 100))
    return await page.content()
  } finally {
    await page.close()
  }
}

// Helmet's rAF-based commit can be throttled under load and miss the wait window.
// Retry the route a couple of times before failing the whole build over one flake.
async function snapshotWithRetry(pathname, attempts = 3) {
  for (let attempt = 1; ; attempt++) {
    try {
      return await snapshot(pathname)
    } catch (err) {
      if (attempt >= attempts) throw err
      console.warn(`  ⚠ ${pathname} attempt ${attempt} failed (${err.message.split('\n')[0]}); retrying…`)
    }
  }
}

async function writeRoute(pathname, html) {
  const outDir = pathname === '/' ? distDir : join(distDir, pathname)
  await mkdir(outDir, { recursive: true })
  const outFile = join(outDir, 'index.html')
  await writeFile(outFile, html)
  console.log('  ✓', pathname)
}

try {
  console.log(`Prerendering ${ROUTES.length} routes...`)
  for (const route of ROUTES) {
    const html = await snapshotWithRetry(route)
    await writeRoute(route, html)
  }

  console.log('Prerendering 404 page...')
  const notFoundHtml = await snapshotWithRetry('/notfound')
  await writeFile(join(distDir, '404.html'), notFoundHtml)
  console.log('  ✓ /404.html')
} finally {
  await browser.close()
  await new Promise((res) => server.httpServer.close(() => res()))
}

console.log('Done.')
