'use client'

import { useEffect } from 'react'

// Neobrutalist palette colours, same as BG in layout.jsx's themeInitScript.
const COLORS = ['#5DE8A8', '#FFE14D', '#FF5C8A', '#3D5AFE']
const GRID = 8 // 8x8 "pixels"
const SCALE = 4 // drawn at 32x32 so each pixel is a crisp 4x4 block
const BAND = 2 // pixels per colour stripe
const FRAME_MS = 1000

// Swaps the favicon for a canvas-drawn pixel rainbow whose diagonal stripes
// shift one pixel per second. Chrome, Edge and Firefox pick up the new href;
// Safari ignores favicon changes and keeps the static /hibiscus.png.
export default function AnimatedFavicon() {
  useEffect(() => {
    const canvas = document.createElement('canvas')
    canvas.width = canvas.height = GRID * SCALE
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Next renders both rel="icon" and rel="shortcut icon"; update every one.
    const links = Array.from(document.querySelectorAll('link[rel~="icon"]'))
    if (!links.length) return
    const originalHrefs = links.map((l) => l.href)

    let offset = 0
    const draw = () => {
      for (let y = 0; y < GRID; y++) {
        for (let x = 0; x < GRID; x++) {
          const band = Math.floor((x + y + offset) / BAND) % COLORS.length
          ctx.fillStyle = COLORS[band]
          ctx.fillRect(x * SCALE, y * SCALE, SCALE, SCALE)
        }
      }
      const href = canvas.toDataURL('image/png')
      links.forEach((l) => { l.href = href })
    }

    draw()
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const timer = reduceMotion ? null : setInterval(() => {
      if (document.hidden) return
      // Step backwards so stripes travel down-right.
      offset = (offset - 1 + BAND * COLORS.length) % (BAND * COLORS.length)
      draw()
    }, FRAME_MS)

    return () => {
      clearInterval(timer)
      links.forEach((l, i) => { l.href = originalHrefs[i] })
    }
  }, [])

  return null
}
