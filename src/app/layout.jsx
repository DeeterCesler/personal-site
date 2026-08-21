import '@/index.css'
import '@/App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import { SITE, SITE_URL, DEFAULT_DESCRIPTION, DEFAULT_OG_IMAGE } from '@/seo/routes'
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
