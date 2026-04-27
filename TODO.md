# Code Audit — Anti-patterns & Fixes

## High Severity
- [x] **State mutation in `ColorContext`** (`src/context/ColorContext.jsx:84,90`) — mutating `randomColor.inUse = true` on state objects; use `map` to return new array copies
- [x] **Unbounded recursion in `getRandomColor`** (`ColorContext.jsx:78-87`) — stack overflow if all 16 colors are in use; add an exit path
- [x] **Unsanitized `dangerouslySetInnerHTML`** (`src/components/Card/Card.jsx:42`) — removed `customHtml` prop entirely (was never used)
- [x] **`requestAnimationFrame` loop never cancelled** — `ThreeJSModel.jsx` and `Corner3dModel.jsx` deleted (dead components)
- [x] **Triple redundant `resize` listeners** (`ThreeJSModel.jsx:305-309`) — file deleted
- [x] **`window.matchMedia` called in component body** (`ThemeContext.jsx:14`) — moved to `useRef` so same object is used for add/remove
- [x] **DOM mutation during render** (`ThemeContext.jsx:18-20`) — retained in `useState` initializer (intentional: prevents theme flash); `useEffect` now uses captured ref
- [x] **`document.body.style.height = '500vh'` global side effect** (`FlowerIntroAnimation.jsx`) — file deleted
- [x] **`document.querySelector` in uncleaned `setTimeout`** (`src/Pages/Work/index.jsx:19-27`) — stored in `let timer`, cleared in cleanup return

## Medium Severity
- [x] **`PsychedelicBackground` recreates interval every 32ms** (`src/components/PsychedelicBackground.jsx:10-31`) — `Math.floor(Math.random() * 1)` / `Math.floor(Math.random())` both always returned `0`; fixed to `Math.floor(Math.random() * 3) + 1`
- [x] **Array index as `key`** — `Carousel.jsx` uses `child.key ?? index`; `Blog.jsx` uses `article.href`
- [x] **`useCardState` missing dep** (`src/components/Card/useCardState.js:8`) — added `// eslint-disable-next-line` (intentional one-shot)
- [x] **`<a href>` instead of `<Link>`** — `Nav/index.jsx` and `NotFound/index.jsx` updated to use `<Link>`
- [x] **`Route exact` prop on React Router v6** (`src/App.jsx:85,87,89`) — removed
- [x] **Duplicate `scrollToTop`** (`Blog.jsx:35-37`) — removed manual `useEffect`
- [x] **No route-level code splitting** (`src/App.jsx`) — all page imports converted to `React.lazy()` + `Suspense`
- [x] **`MoreBlogsFooter` in-place sort on every render** (`src/components/MoreBlogsFooter.jsx:50`) — wrapped in `useMemo`
- [x] **Uncleaned `setTimeout` in `ContactContext`** (`src/context/ContactContext.jsx:12`) — stored in `useRef`, cleared before each new timer
- [x] **Duplicate GA integration + hardcoded tracking ID** (`src/App.jsx:38`, `src/hooks/useTracker.jsx:9`) — deleted `useTracker.jsx`; single `ReactGA` path; ID moved to `VITE_GA_ID` env var
- [x] **`jquery` in production deps** (`package.json:17`) — removed (dungeon loads from CDN)
- [x] **`node` in production deps** (`package.json:16`) — moved to `engines` field
- [x] **`LanguageContext` is a no-op** (`src/context/LanguageContext.jsx`) — deleted file + removed `LanguageProvider` from `App.jsx`
- [x] **`Carousel` re-instantiates `Card` from props** — now renders children directly via `React.cloneElement` with size overrides
- [x] **No error boundaries** — created `src/components/ErrorBoundary.jsx`; wraps `Suspense`/`Routes` in `App.jsx`

## Low Severity
- [x] **Delete seven dead components** — `Corner3dModel.jsx`, `CurtainReveal.jsx`, `FlowerIntroAnimation.jsx`, `ThreeJSModel.jsx`, `InternalLinks.jsx`, `ConfettiCannon.jsx`, `serviceWorker.js` all deleted
- [x] **Unused `twitter` SVG export** (`src/assets/icons/index.js:5`) — removed
- [x] **Optimize large assets** — GIFs converted to WebM VP9 (dungeon 18MB→166KB, scroller 6.1MB→20KB, cas2 4.4MB→33KB); chca.png 3.9MB→114KB JPEG; code.jpg 3.4MB→102KB; `loading="lazy"` added to Card and ProjectGrid images; Card/SlopCard auto-detect `.webm` and render `<video autoplay loop muted playsinline>`
- [x] **Dead image `src/Pages/HomePage/climb.JPG`** (3MB) — deleted
- [x] **Invalid CSS values** (`src/App.css`) — fixed `background-repeat: none` → `no-repeat`; `font-weight: 650` → `600`; removed duplicate `.tiny-spacer`
- [ ] **`!important` overuse** — fix specificity in `Card/style.css`, `Work/style.css`, `App.css` instead of using `!important`
- [x] **`<style jsx>` in `ThreeJSModel.jsx:348-354`** — file deleted
- [x] **Dead state in `ThreeJSModel`** — file deleted
- [x] **Dungeon: `keypress` (deprecated) + `onkeydown` assignment** (`public/dungeon/app.js`) — merged into single `keydown` listener with arrow key support
- [x] **Dungeon: missing file extension** (`app.js:26,417`) — `img/skeleton` → `img/skeleton.jpg`

---

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
