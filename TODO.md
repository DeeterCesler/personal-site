# Slop Bin Feature

## Entry Point
- [x] Add trash can row to `SectionLinks` (styled like existing link rows)
- [x] CSS lid-wobble animation on trash can hover
- [x] On click: dark `clip-path: circle()` overlay expands from click position, then navigate to `/slop`
- [x] Add overlay element + JS to `SectionLinks.jsx` (or a wrapper)

## Routing
- [x] Create `/src/Pages/SlopBin/` directory
- [x] Add `import SlopBin` and `<Route path="/slop" element={<SlopBin/>} />` to `App.jsx`

## SlopCard Component (`/src/Pages/SlopBin/SlopCard.jsx`)
- [x] Aged paper front (off-white/cream gradient, no image)
- [x] Rotation range ±6° (vs. Card's ±2°)
- [x] Uneven border-radius (each corner slightly different)
- [x] Dog-ear fold in bottom-right corner via `::after`
- [x] Fun badge prop (e.g. "made in a weekend", "works 60% of the time")
- [x] "flip me →" hint text on front
- [x] Colorful back (reuse ColorContext like Card does)
- [x] Title + caption + optional link on back
- [x] Same flip-on-click behavior as Card
- [x] Scale on hover

## SlopBin Page (`/src/Pages/SlopBin/index.jsx`)
- [x] Dark bin-interior background (near-black, no WaveCanvas)
- [x] "SLOP BIN" header — distressed / slightly chaotic styling
- [x] Framer Motion stagger: cards animate in with tumble/fall effect on mount
- [x] Loose grid layout (not pixel-perfect — gaps + rotation give the chaos)
- [x] Mobile: single column, still rotated
- [x] Initial project: Dungeon Crawler (link to `/work/dungeon`)
- [x] Empty slot cards / placeholder for future projects (optional)
- [x] "↑ escape" back link at top or bottom (removed — Back button in nav handles this)

## Styles (`/src/Pages/SlopBin/style.css`)
- [x] `.slop-bin` page wrapper — dark bg, min-height 100vh
- [x] `.slop-bin-header` — distressed look
- [x] `.slop-card` — paper texture via layered gradients, uneven radius
- [x] `.slop-card-front` / `.slop-card-back` — preserve-3d flip setup
- [x] `.slop-badge` — handwriting-style label (font, color)
- [x] `.slop-card-front::after` — dog-ear fold
- [x] Responsive tweaks for mobile
