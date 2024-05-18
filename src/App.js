import React, { useEffect } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import Nav from './layout/Nav'
import Blog from './Pages/Blog'
import Tech from './Pages/Tech'
import Junior from './Pages/Blogs/Junior'
import Dungeon from './FUN/dungeon'
import Now from './Pages/Now'
import ReactGA from 'react-ga'
import NotFoundPage from './Pages/NotFoundPage'
import StartupsVersus from './Pages/Blogs/StartupsVersus'
import SecurityPrinciples from './Pages/Blogs/SecurityPrinciples'
import Senior from './Pages/Blogs/Senior'
import PsychedelicBackground from './components/PsychedelicBackground'
ReactGA.initialize('UA-110417068-2')
ReactGA.pageview(window.location.pathname + window.location.search)

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
        <Route exact path="/" element={<HomePage/>} />
        <Route exact path="/test" element={<PsychedelicBackground/>} />
        <Route exact from="/index" to="/" />
        <Route exact path="/index.html" element={<HomePage/>} />
        {/* Blogs */}
        <Route exact path="/blog" element={<Blog />} />
        <Route exact path="/junior" element={<Junior/>} />
        <Route exact path="/senior" element={<Senior/>} />
        <Route exact path="/security" element={<SecurityPrinciples/>} />
        <Route exact path="/startups-vs-big-tech" element={<StartupsVersus/>} />
        {/* Tech */}
        <Route exact path="/tech" element={<Tech/>} />
        <Route exact path="/tech/dungeon" element={<Dungeon/>} />
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
