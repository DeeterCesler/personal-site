import React, { useEffect } from 'react'
import './App.css'
// Packages
import { Navigate, Route, Routes } from 'react-router-dom'
import ReactGA from 'react-ga4'
// Components
import Nav from './layout/Nav'
// Pages
import HomePage from './Pages/HomePage'
import Blog from './Pages/Blog'
import Work from './Pages/Work'
import Dungeon from './FUN/dungeon'
import Now from './Pages/Now'
import NorsePrivacy from './Pages/NorsePrivacy'
import NotFound from './Pages/NotFound'
// Blogs
import Junior from './Pages/Blogs/Junior'
import StartupsVersus from './Pages/Blogs/StartupsVersus'
import SecurityPrinciples from './Pages/Blogs/SecurityPrinciples'
import Senior from './Pages/Blogs/Senior'
// Hooks, Utils, Context
import useTracker from './hooks/useTracker'
import generateConsoleName from './utils/ConsoleName'
import { LanguageProvider } from './context/LanguageContext'

ReactGA.initialize('G-Z1TZ5MEDCR')

function App() {
  useEffect(() => {
    const {art, message, colors} = generateConsoleName()
    console.log(art, `color: ${colors[0]}`, `color: ${colors[1]}`)
    console.log(
      message,
      `
      font-weight: 900;
    `,
      'font-weight: 500;',
    )
  })

  // Google Analytics
  useTracker();

  return (
    <LanguageProvider>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/index" element={<Navigate to="/" replace />} />
          <Route path="/index.html" element={<Navigate to="/" replace />} />
          {/* Blogs */}
          <Route exact path="/blog" element={<Blog />} />
          <Route exact path="/blog/junior" element={<Junior/>} />
          <Route exact path="/blog/senior" element={<Senior/>} />
          <Route exact path="/blog/security" element={<SecurityPrinciples/>} />
          <Route exact path="/blog/startups-vs-big-tech" element={<StartupsVersus/>} />
          {/* Work */}
          <Route exact path="/work" element={<Work />} />
          <Route exact path="/work/dungeon" element={<Dungeon/>} />
          {/* Now */}
          <Route exact path="/now" element={<Now/>} />
          {/* Norse Privacy Policy */}
          <Route exact path="/norse/privacy" element={<NorsePrivacy/>} />
          {/* 404 */}
          <Route exact path="/notfound" element={<NotFound/>} />
          {/* catch all other routes and redirect to "/notfound" */}
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </div>
    </LanguageProvider>
  )
}

export default App
