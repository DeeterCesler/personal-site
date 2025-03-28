import React, { useEffect } from 'react'
import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import Nav from './layout/Nav'
import Blog from './Pages/Blog'
import Work from './Pages/Work'
import Junior from './Pages/Blogs/Junior'
import Dungeon from './FUN/dungeon'
import Now from './Pages/Now'
import ReactGA from 'react-ga4'
import NotFound from './Pages/NotFound'
import StartupsVersus from './Pages/Blogs/StartupsVersus'
import SecurityPrinciples from './Pages/Blogs/SecurityPrinciples'
import Senior from './Pages/Blogs/Senior'
import useTracker from './hooks/useTracker'
import generateConsoleName from './utils/ConsoleName'

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
        {/* 404 */}
        <Route exact path="/notfound" element={<NotFound/>} />
        {/* catch all other routes and redirect to "/notfound" */}
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </div>
  )
}

export default App
