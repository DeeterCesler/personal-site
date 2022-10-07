import React, { useEffect } from 'react'
import './App.css'
import { Route, Switch, Redirect } from 'react-router-dom'
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

  const homepage = () => {
    return <HomePage />
  }

  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/" render={homepage} />
        <Route exact from="/index" to="/" />
        <Route exact path="/index.html" render={homepage} />
        {/* Blogs */}
        <Route exact path="/blog" render={Blog} />
        <Route exact path="/junior" render={Junior} />
        <Route exact path="/senior" render={Senior} />
        <Route exact path="/security" render={SecurityPrinciples} />
        <Route exact path="/startups-vs-big-tech" render={StartupsVersus} />
        {/* Tech */}
        <Route exact path="/tech" render={Tech} />
        <Route exact path="/tech/dungeon" render={Dungeon} />
        {/* Now */}
        <Route exact path="/now" render={Now} />
        {/* 404 */}
        <Route exact path="/notfound" render={NotFoundPage} />
        <Redirect from="/*" to="/notfound" />
      </Switch>
    </div>
  )
}

export default App
