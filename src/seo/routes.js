export const SITE = 'Deeter Cesler'
export const SITE_URL = 'https://www.deetercesler.com'
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-card.png`
export const DEFAULT_DESCRIPTION = 'Personal site of Deeter Cesler, product engineer, copywriter, and guerrilla marketer. Selected work, side projects, and writing on shipping software.'

const HOME_TITLE = `${SITE} | product engineer, software engineer, copywriter, guerrilla marketer`

export const ROUTE_SEO = {
  '/': {
    title: HOME_TITLE,
    description: DEFAULT_DESCRIPTION,
  },
  '/blog': {
    title: `Writing | ${SITE}`,
    description: 'Essays and notes on software, shipping, and side projects by Deeter Cesler.',
  },
  '/blog/junior': {
    title: `6 Ways to De-Junior Your Code | ${SITE}`,
    description: 'Six small habits that quietly separate junior code from senior code.',
  },
  '/blog/senior': {
    title: `3 Ways a Senior Thinks | ${SITE}`,
    description: 'How a senior engineer reasons about scope, risk, and the code they choose not to write.',
  },
  '/blog/security': {
    title: `8 Security Principles Every Software Dev Should Know | ${SITE}`,
    description: 'A grounded introduction to the security principles every working developer should have in their head.',
  },
  '/blog/startups-vs-big-tech': {
    title: `Working at Big Tech vs Startups | ${SITE}`,
    description: 'What actually differs between big tech and startup engineering, beyond the cliches.',
  },
  '/blog/immutability': {
    title: `Immutability in JavaScript | ${SITE}`,
    description: 'Why immutability matters in JavaScript and how to write code that leans into it.',
  },
  '/blog/bdd': {
    title: `Intro to Behavior-Driven Development | ${SITE}`,
    description: 'A practical introduction to behavior-driven development for working software teams.',
  },
  '/blog/tdd': {
    title: `Use TDD for Faster Development | ${SITE}`,
    description: 'Test-driven development as a speed tool, not a ceremony.',
  },
  '/blog/looping': {
    title: `Looping in JavaScript | ${SITE}`,
    description: 'When to use map, filter, reduce, forEach, and plain for loops in JavaScript.',
  },
  '/blog/bootstrap-flexbox-css-grid': {
    title: `Bootstrap vs Flexbox vs CSS Grid | ${SITE}`,
    description: 'Bootstrap, Flexbox, and CSS Grid each solve different layout problems. A guide to picking the right one.',
  },
  '/work': {
    title: `Work | ${SITE}`,
    description: 'Selected work, products, and side projects by Deeter Cesler.',
  },
  '/dungeon': {
    title: `Dungeon | ${SITE}`,
    description: 'A small browser dungeon game, built in vanilla JS.',
  },
  '/slop': {
    title: `Slop Bin | ${SITE}`,
    description: 'A bin of half-baked experiments, prototypes, and one-off ideas.',
  },
  '/now': {
    title: `Now | ${SITE}`,
    description: 'What Deeter is focused on right now, updated periodically.',
  },
  '/psychedelic': {
    title: `Psychedelic | ${SITE}`,
    description: 'An ambient visual experiment.',
  },
  '/privacy': {
    title: `Privacy | ${SITE}`,
    description: 'How analytics work on deetercesler.com.',
  },
  '/norse/privacy': {
    title: `Norse Flashcards Privacy | ${SITE}`,
    description: 'Privacy policy for the Norse Flashcards iOS app.',
  },
  '/notfound': {
    title: `Not Found | ${SITE}`,
    description: 'The page you are looking for does not exist.',
  },
}

// Routes intentionally kept out of the sitemap: the 404 and app-specific
// privacy policies. Everything else in ROUTE_SEO is indexable content.
export const SITEMAP_EXCLUDE = new Set([
  '/notfound',
  '/norse/privacy',
])

// Last-modified date per route (YYYY-MM-DD) for the sitemap. Routes missing
// here fall back to the build date, so a newly added page still gets listed
// even if you forget to add it here. Update when a page's content changes.
export const LASTMOD = {
  '/': '2026-05-23',
  '/blog': '2026-05-23',
  '/blog/junior': '2022-03-28',
  '/blog/senior': '2022-03-28',
  '/blog/security': '2022-03-28',
  '/blog/startups-vs-big-tech': '2022-03-28',
  '/blog/immutability': '2025-04-09',
  '/blog/bdd': '2025-04-09',
  '/blog/tdd': '2025-04-16',
  '/blog/looping': '2025-04-09',
  '/blog/bootstrap-flexbox-css-grid': '2025-04-09',
  '/work': '2026-06-04',
  '/dungeon': '2026-04-22',
  '/slop': '2026-06-02',
  '/now': '2026-06-02',
  '/psychedelic': '2026-05-23',
  '/privacy': '2026-05-24',
}

export function getRouteSeo(pathname) {
  return ROUTE_SEO[pathname] || {
    title: `Not Found | ${SITE}`,
    description: 'The page you are looking for does not exist.',
  }
}
