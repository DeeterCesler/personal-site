import React, { Suspense, useEffect } from 'react'
import './App.css'
import ReactGA from 'react-ga4'
import { Route, Routes, useLocation } from 'react-router-dom'
import Nav from './layout/Nav'
import Footer from './layout/Footer'
import ErrorBoundary from './components/ErrorBoundary'
import { ThemeProvider } from './context/ThemeContext'
import { ColorProvider } from './context/ColorContext'
import { ContactProvider } from './context/ContactContext'
import ContactModal from './components/ContactModal'
import generateConsoleName from './utils/ConsoleName'

const HomePage = React.lazy(() => import('./Pages/HomePage'))
const Blog = React.lazy(() => import('./Pages/Blog'))
const Work = React.lazy(() => import('./Pages/Work'))
const Dungeon = React.lazy(() => import('./FUN/dungeon'))
const SlopBin = React.lazy(() => import('./Pages/SlopBin'))
const Now = React.lazy(() => import('./Pages/Now'))
const NorsePrivacy = React.lazy(() => import('./Pages/NorsePrivacy'))
const GroupPrayPrivacy = React.lazy(() => import('./Pages/GroupPrayPrivacy'))
const Privacy = React.lazy(() => import('./Pages/Privacy'))
const NotFound = React.lazy(() => import('./Pages/NotFound'))
const Junior = React.lazy(() => import('./Pages/Blogs/Junior'))
const StartupsVersus = React.lazy(() => import('./Pages/Blogs/StartupsVersus'))
const SecurityPrinciples = React.lazy(() => import('./Pages/Blogs/SecurityPrinciples'))
const Senior = React.lazy(() => import('./Pages/Blogs/Senior'))
const Immutability = React.lazy(() => import('./Pages/Blogs/tensure-articles/immutability'))
const Bdd = React.lazy(() => import('./Pages/Blogs/tensure-articles/bdd'))
const TDDArticle = React.lazy(() => import('./Pages/Blogs/tensure-articles/tdd'))
const Looping = React.lazy(() => import('./Pages/Blogs/tensure-articles/looping'))
const LayoutManagementArticle = React.lazy(() => import('./Pages/Blogs/tensure-articles/bootstrap-flexbox-css-grid'))
const Psychedelic = React.lazy(() => import('./Pages/Psychedelic'))

const gaId = import.meta.env.VITE_GA_ID
if (gaId) ReactGA.initialize(gaId)

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function PageTracker() {
  const { pathname } = useLocation()
  useEffect(() => {
    if (!gaId) return
    ReactGA.send({ hitType: 'pageview', page: pathname })
  }, [pathname])
  return null
}

const SITE = 'Deeter Cesler'
const HOME_TITLE = `${SITE} | product engineer, software engineer, copywriter, guerrilla marketer`
const ROUTE_TITLES = {
  '/': HOME_TITLE,
  '/blog': `Writing | ${SITE}`,
  '/blog/junior': `6 Ways to De-Junior Your Code | ${SITE}`,
  '/blog/senior': `3 Ways a Senior Thinks | ${SITE}`,
  '/blog/security': `8 Security Principles Every Software Dev Should Know | ${SITE}`,
  '/blog/startups-vs-big-tech': `Working at Big Tech vs Startups | ${SITE}`,
  '/blog/immutability': `Immutability in JavaScript | ${SITE}`,
  '/blog/bdd': `Intro to Behavior-Driven Development | ${SITE}`,
  '/blog/tdd': `Use TDD for Faster Development | ${SITE}`,
  '/blog/looping': `Looping in JavaScript | ${SITE}`,
  '/blog/bootstrap-flexbox-css-grid': `Bootstrap vs Flexbox vs CSS Grid | ${SITE}`,
  '/work': `Work | ${SITE}`,
  '/dungeon': `Dungeon | ${SITE}`,
  '/slop': `Slop Bin | ${SITE}`,
  '/now': `Now | ${SITE}`,
  '/psychedelic': `Psychedelic | ${SITE}`,
  '/privacy': `Privacy | ${SITE}`,
  '/norse/privacy': `Norse Flashcards Privacy | ${SITE}`,
  '/grouppray/privacy': `GroupPray Privacy | ${SITE}`,
  '/notfound': `Not Found | ${SITE}`,
}

function DocumentTitle() {
  const { pathname } = useLocation()
  useEffect(() => {
    document.title = ROUTE_TITLES[pathname] || `Not Found | ${SITE}`
  }, [pathname])
  return null
}

function App() {
  useEffect(() => {
    generateConsoleName()
  }, [])

  return (
    <ThemeProvider>
      <ColorProvider>
        <ContactProvider>
          <div className="App">
            <ScrollToTop />
            <PageTracker />
            <DocumentTitle />
            <Nav />
            <ContactModal />
            <ErrorBoundary>
              <Suspense fallback={<div style={{ minHeight: '100vh' }} />}>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/blog/junior" element={<Junior />} />
                  <Route path="/blog/senior" element={<Senior />} />
                  <Route path="/blog/security" element={<SecurityPrinciples />} />
                  <Route path="/blog/startups-vs-big-tech" element={<StartupsVersus />} />
                  <Route path="/blog/immutability" element={<Immutability />} />
                  <Route path="/blog/bdd" element={<Bdd />} />
                  <Route path="/blog/tdd" element={<TDDArticle />} />
                  <Route path="/blog/looping" element={<Looping />} />
                  <Route path="/blog/bootstrap-flexbox-css-grid" element={<LayoutManagementArticle />} />
                  <Route path="/work" element={<Work />} />
                  <Route path="/dungeon" element={<Dungeon />} />
                  <Route path="/slop" element={<SlopBin />} />
                  <Route path="/now" element={<Now />} />
                  <Route path="/psychedelic" element={<Psychedelic />} />
                  <Route path="/privacy" element={<Privacy />} />
                  <Route path="/norse/privacy" element={<NorsePrivacy />} />
                  <Route path="/grouppray/privacy" element={<GroupPrayPrivacy />} />
                  <Route path="/notfound" element={<NotFound />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </ErrorBoundary>
            <Footer />
          </div>
        </ContactProvider>
      </ColorProvider>
    </ThemeProvider>
  )
}

export default App
