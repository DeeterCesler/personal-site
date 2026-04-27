# QA Assessment — Full codebase audit
Date: 2026-04-27
Triggered by: manual "code audit" request; covers all src/ including recently shipped SlopBin feature

## Summary
The SlopBin feature is clean and well-implemented — no new regressions. However, ~20 items from the prior TODO audit remain unfixed. The two most urgent are a direct state mutation in `ColorContext` that will silently corrupt shared color-assignment state, and uncleared `requestAnimationFrame` loops in Three.js components that will leak after route transitions (though those components are currently dead code). Several medium items are also carryovers: `Route exact` on React Router v6, duplicate GA tracking IDs, and a completely no-op `LanguageContext` wrapping the entire app.

## Dimension scores
| Dimension | Status | Finding |
|---|---|---|
| Business case | PASS | SlopBin ships cleanly. All routes resolve. No scope creep observed. |
| Architecture | WARN | `LanguageContext` wraps the whole tree but is pure dead code (always resolves to `'en'`, never consumed). `ThreeJSModel` / `Corner3dModel` / 5 other dead component files still exist on disk but are not imported anywhere — harmless but confusing. |
| UX | PASS | SlopBin handles placeholder state and mobile layout. Flip interaction uses `stopPropagation` correctly on the link. `Back` nav handles escape. |
| Code quality | WARN | `Route exact` props remain on v6 routes (App.jsx:85,87,89). `Blog.jsx` has a manual `window.scrollTo(0,0)` that duplicates the global `ScrollToTop` component. Array index used as key in `Blog.jsx:45`. `useCardState` dep array omits `rotationRange` (line 10) — intentional one-shot, but lint will flag it. |
| Reliability | FAIL | **`ColorContext` directly mutates `inUse` on state objects** (`ColorContext.jsx:84,90`) — bypasses React's state model; `setColors` is never called. **Unbounded recursion in `getRandomColor`** — stack overflow if all 16 colors are in use simultaneously. `ContactContext` setTimeout is not cleared on unmount (minor — 200ms race, but a React warning). `Work/index.jsx:19-27` — setTimeout is not cleared on unmount. |
| Security | WARN | `Card.jsx:42` uses `dangerouslySetInnerHTML` on a `customHtml` prop with no sanitization. Unlikely to reach untrusted input today, but should have DOMPurify or be removed. GA tracking ID `G-Z1TZ5MEDCR` is hardcoded in two files (`App.jsx:38`, `useTracker.jsx:9`). |
| Efficiency | WARN | `PsychedelicBackground` recreates its interval every 32ms (re-runs `useEffect` on every `hues`/`step` state change). `Math.floor(Math.random())` always returns `0`, so `step` is always `1` — the random step logic is broken. No route-level code splitting — all 14+ page components are eagerly bundled. Large GIF assets (`dungeon.gif` 18MB, `scroller.gif` 6MB, `cas2.gif` 4.4MB) served as-is. |

## Action items

### High — fix now
- **`ColorContext` state mutation** (`ColorContext.jsx:84,90`): replace direct `randomColor.inUse = true` / `color.inUse = false` with `setColors(prev => prev.map(c => c.hex === randomColor.hex ? {...c, inUse: true} : c))`. Also add a fallback in `getRandomColor` for when all colors are in use (e.g. return any color rather than recursing infinitely).

### Medium — fix soon
- **`Route exact` on React Router v6** (`App.jsx:85,87,89`): remove the `exact` prop — it's silently ignored in v6 and produces a prop warning.
- **`LanguageContext` no-op** (`LanguageContext.jsx:23`): delete the file, remove `LanguageProvider` from `App.jsx`. The i18n packages (`i18next`, `react-i18next`, `i18next-browser-languagedetector`) can be uninstalled if i18n is not being pursued.
- **Duplicate GA integration**: `App.jsx` calls `ReactGA.initialize()` and then `useTracker` also calls `window.gtag` directly — two separate hits per page view. Pick one path; `ReactGA.initialize` + `ReactGA.send` is the cleaner option. Move the ID to `VITE_GA_ID` env var.
- **`ContactContext` setTimeout cleanup** (`ContactContext.jsx:12`): store the timeout in a `useRef` and call `clearTimeout` in a cleanup effect.
- **`Work/index.jsx` setTimeout cleanup** (`Work/index.jsx:19-27`): same — store in ref and clear on unmount.
- **`dangerouslySetInnerHTML` in `Card.jsx:42`**: add DOMPurify or convert to a structured prop if `customHtml` is only ever internal content.

### Low — clean up when convenient
- **Delete dead component files**: `Corner3dModel.jsx`, `CurtainReveal.jsx`, `FlowerIntroAnimation.jsx`, `ThreeJSModel.jsx`, `InternalLinks.jsx`, `ConfettiCannon.jsx`, `serviceWorker.js`.
- **Duplicate scrollToTop** (`Blog.jsx:35-37`): remove the manual `useEffect` — the global `ScrollToTop` in App handles it.
- **`PsychedelicBackground` step bug** (`PsychedelicBackground.jsx:8,25`): `Math.floor(Math.random() * 1)` and `Math.floor(Math.random())` both always return `0`; change to `Math.floor(Math.random() * 3) + 1` to get meaningful steps.
- **`jquery` / `node` in production deps** (`package.json`): move `node` to `engines` field; `jquery` is only used in dungeon which loads it from CDN — remove from npm deps.
- **Array index key in `Blog.jsx:45`**: use `article.href` as key.
- **Large GIF assets**: convert `dungeon.gif`, `scroller.gif`, `cas2.gif` to `<video autoplay loop muted playsinline>`.
- **Route-level code splitting** (`App.jsx`): wrap page imports in `React.lazy()` + `Suspense` to reduce initial bundle.

---
_Auto-generated by QA hook_
