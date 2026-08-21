import '@/index.css'
import '@/App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import { SITE, SITE_URL, DEFAULT_DESCRIPTION, DEFAULT_OG_IMAGE } from '@/seo/routes'
import { THEME_MODE } from '@/themeMode'
import Providers from './Providers'
import Analytics from './Analytics'
import Nav from '@/layout/Nav'
import Footer from '@/layout/Footer'
import ContactModal from '@/components/ContactModal'
import ErrorBoundary from '@/components/ErrorBoundary'

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE} | product engineer, software engineer, copywriter, guerrilla marketer`,
    template: '%s',
  },
  description: DEFAULT_DESCRIPTION,
  authors: [{ name: SITE }],
  manifest: '/manifest.json',
  icons: {
    icon: '/hibiscus.png',
    apple: '/hibiscus.png',
    shortcut: '/hibiscus.png',
  },
  openGraph: {
    type: 'website',
    siteName: SITE,
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@DeeterCesler',
    creator: '@DeeterCesler',
  },
}

export const viewport = {
  themeColor: '#000000',
}

// Runs before first paint (blocking, inline) so the correct theme/palette
// attributes and body background are set before React hydrates. Without this
// the server HTML has no theme attributes and the page flashes the CSS default
// (beige) until ThemeContext's effect runs. Logic mirrors ThemeContext.jsx;
// keep the two in sync.
const themeInitScript = `(function(){try{
var MODE=${JSON.stringify(THEME_MODE)};
var PALETTES=['mint','pink','yellow','cobalt'];
var BG={mint:'#5DE8A8',pink:'#FF5C8A',yellow:'#FFE14D',cobalt:'#3D5AFE'};
var CLASSIC='#f2f0e8',DARK='#06060c';
var dark=window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches;
var p;try{p=sessionStorage.getItem('lightPalette');}catch(e){}
if(!p||PALETTES.indexOf(p)<0){p=PALETTES[Math.floor(Math.random()*PALETTES.length)];try{sessionStorage.setItem('lightPalette',p);}catch(e){}}
var el=document.documentElement;
el.setAttribute('data-mode',MODE);
el.setAttribute('data-theme',dark?'dark':'light');
if(MODE==='neobrutalist'){el.setAttribute('data-palette',p);}else{el.removeAttribute('data-palette');}
var bg=dark?DARK:(MODE==='neobrutalist'?BG[p]:CLASSIC);
el.style.backgroundColor=bg;
if(document.body){document.body.style.backgroundColor=bg;}
}catch(e){}})();`

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Deeter Cesler',
  url: 'https://www.deetercesler.com/',
  image: 'https://www.deetercesler.com/og-card.png',
  jobTitle: 'Product Engineer',
  sameAs: [
    'https://twitter.com/DeeterCesler',
    'https://www.linkedin.com/in/deetercesler/',
    'https://github.com/deetercesler',
    'https://deetercesler.medium.com/',
    'https://deeeter.substack.com/',
    'https://www.instagram.com/deetercesler/',
  ],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Providers>
          <div className="App">
            <Analytics />
            <Nav />
            <ContactModal />
            <ErrorBoundary>{children}</ErrorBoundary>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}
