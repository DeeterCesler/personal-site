import React, { useEffect } from 'react'
import './App.css'
// Packages
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import ReactGA from 'react-ga4'
// Components
import Nav from './layout/Nav'
import Footer from './layout/Footer'
// Pages
import HomePage from './Pages/HomePage'
import Blog from './Pages/Blog'
import Work from './Pages/Work'
import Dungeon from './FUN/dungeon'
import SlopBin from './Pages/SlopBin'
import Now from './Pages/Now'
import NorsePrivacy from './Pages/NorsePrivacy'
import GroupPrayPrivacy from './Pages/GroupPrayPrivacy'
import NotFound from './Pages/NotFound'
// Blogs
import Junior from './Pages/Blogs/Junior'
import StartupsVersus from './Pages/Blogs/StartupsVersus'
import SecurityPrinciples from './Pages/Blogs/SecurityPrinciples'
import Senior from './Pages/Blogs/Senior'
import Immutability from './Pages/Blogs/tensure-articles/immutability'
import Bdd from './Pages/Blogs/tensure-articles/bdd'
import TDDArticle from './Pages/Blogs/tensure-articles/tdd'
import Looping from './Pages/Blogs/tensure-articles/looping'
import LayoutManagementArticle from './Pages/Blogs/tensure-articles/bootstrap-flexbox-css-grid'
// Hooks, Utils, Context
import useTracker from './hooks/useTracker'
import generateConsoleName from './utils/ConsoleName'
import { LanguageProvider } from './context/LanguageContext'
import { ThemeProvider } from './context/ThemeContext'
import { ColorProvider } from './context/ColorContext'
import { ContactProvider } from './context/ContactContext'
import ContactModal from './components/ContactModal'

ReactGA.initialize('G-Z1TZ5MEDCR')

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function App() {
  useEffect(() => {
    generateConsoleName()
  }, [])

  // Google Analytics
  useTracker();

  return (
    <LanguageProvider>
      <ThemeProvider>
        <ColorProvider>
        <ContactProvider>
        <div className="App">
          <ScrollToTop />
          <Nav />
          <ContactModal />
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/index" element={<Navigate to="/" replace />} />
            <Route path="/index.html" element={<Navigate to="/" replace />} />
            {/* Blogs */}
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/junior" element={<Junior/>} />
            <Route path="/blog/senior" element={<Senior/>} />
            <Route path="/blog/security" element={<SecurityPrinciples/>} />
            <Route path="/blog/startups-vs-big-tech" element={<StartupsVersus/>} />
            <Route path="/blog/immutability" element={<Immutability/>} />
            <Route path="/blog/bdd" element={<Bdd/>} />
            <Route path="/blog/tdd" element={<TDDArticle/>} />
            <Route path="/blog/looping" element={<Looping/>} />
            <Route path="/blog/bootstrap-flexbox-css-grid" element={<LayoutManagementArticle/>} />
            {/* Work */}
            <Route path="/work" element={<Work />} />
            <Route path="/dungeon" element={<Dungeon/>} />
            <Route path="/slop" element={<SlopBin/>} />
            {/* Now */}
            <Route path="/now" element={<Now/>} />
            {/* Norse Privacy Policy */}
            <Route exact path="/norse/privacy" element={<NorsePrivacy/>} />
            {/* GroupPray Privacy Policy */}
            <Route exact path="/grouppray/privacy" element={<GroupPrayPrivacy/>} />
            {/* 404 */}
            <Route exact path="/notfound" element={<NotFound/>} />
            {/* catch all other routes and redirect to "/notfound" */}
            <Route path="*" element={<NotFound/>} />
          </Routes>
          <Footer />
        </div>
        </ContactProvider>
        </ColorProvider>
      </ThemeProvider>
    </LanguageProvider>
  )
}

export default App
