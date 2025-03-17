import React, { useEffect } from 'react'
import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import Nav from './layout/Nav'
import Blog from './Pages/Blog'
import Tech from './Pages/Tech'
import Junior from './Pages/Blogs/Junior'
import Dungeon from './FUN/dungeon'
import Now from './Pages/Now'
import ReactGA from 'react-ga4'
import NotFoundPage from './Pages/NotFoundPage'
import StartupsVersus from './Pages/Blogs/StartupsVersus'
import SecurityPrinciples from './Pages/Blogs/SecurityPrinciples'
import Senior from './Pages/Blogs/Senior'
import PsychedelicBackground from './components/PsychedelicBackground'
ReactGA.initialize('G-Z1TZ5MEDCR')

const consoleArt = `
%c
██████╗ ███████╗███████╗████████╗███████╗██████╗ 
██╔══██╗██╔════╝██╔════╝╚══██╔══╝██╔════╝██╔══██╗
██║  ██║█████╗  █████╗     ██║   █████╗  ██████╔╝
██║  ██║██╔══╝  ██╔══╝     ██║   ██╔══╝  ██╔══██╗
██████╔╝███████╗███████╗   ██║   ███████╗██║  ██║
╚═════╝ ╚══════╝╚══════╝   ╚═╝   ╚══════╝╚═╝  ╚═╝
%c                                                 
 ██████╗███████╗███████╗██╗     ███████╗██████╗  
██╔════╝██╔════╝██╔════╝██║     ██╔════╝██╔══██╗ 
██║     █████╗  ███████╗██║     █████╗  ██████╔╝ 
██║     ██╔══╝  ╚════██║██║     ██╔══╝  ██╔══██╗ 
╚██████╗███████╗███████║███████╗███████╗██║  ██║ 
 ╚═════╝╚══════╝╚══════╝╚══════╝╚══════╝╚═╝  ╚═╝ 
                                                 `

const consoleMessage = `
%cWelcome! %cHappy you're here. 

If you're checking the console, you're probably another developer seeing who I am and what I'm about.

I will share any code you see that you're interested, if you ask!

`

function App() {
  useEffect(() => {
    console.log(consoleArt, 'color: #3e7bff', 'color: #bc76ff')
    console.log(
      consoleMessage,
      `
      font-weight: 900;
    `,
      'font-weight: 500;',
    )
  })

  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/test" element={<PsychedelicBackground/>} />
        <Route path="/index" element={<Navigate to="/" replace />} />
        <Route path="/index.html" element={<Navigate to="/" replace />} />
        {/* Blogs */}
        <Route exact path="/blog" element={<Blog />} />
        <Route exact path="/junior" element={<Junior/>} />
        <Route exact path="/senior" element={<Senior/>} />
        <Route exact path="/security" element={<SecurityPrinciples/>} />
        <Route exact path="/startups-vs-big-tech" element={<StartupsVersus/>} />
        {/* Work */}
        <Route exact path="/work" element={<Tech/>} />
        <Route exact path="/work/dungeon" element={<Dungeon/>} />
        {/* Now */}
        <Route exact path="/now" element={<Now/>} />
        {/* 404 */}
        <Route exact path="/notfound" element={<NotFoundPage/>} />
        {/* catch all other routes and redirect to "/notfound" */}
        <Route path="*" element={<NotFoundPage/>} />
      </Routes>
    </div>
  )
}

export default App
