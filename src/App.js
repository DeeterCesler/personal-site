import React, { useEffect } from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import HomePage from './HomePage';
import Logo from './Logo'
// import Work from './Work';
import Fun from './Fun';
import Dungeon from './FUN/dungeon';
import Now from './Now';
import ReactGA from 'react-ga';
import NotFoundPage from './NotFoundPage';
import StartupsVersus from './StartupsVersus';
ReactGA.initialize('UA-110417068-2');
ReactGA.pageview(window.location.pathname + window.location.search);

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
                                                 `;

const consoleMessage = `
%cWelcome! %cHappy you're here. 

If you're checking the console, you're probably another developer seeing who I am and what I'm about.

I will share any code you see that you're interested, if you ask!

`;


function App(){

  useEffect(()=>{
    console.log(consoleArt, 'color: #3e7bff', 'color: #bc76ff');
    console.log(consoleMessage,`
      font-weight: 900;
    `,'font-weight: 500;');
  })

  const homepage = () => {
    return <HomePage />
  }

  return (
      <div className="App">
        <Logo/>
        <Switch>
          <Route exact path="/" render={homepage}/>
          <Route exact from="/index" to="/"/>
          <Route exact path="/index.html" render={homepage}/>
          {/* <Route exact path="/work" render={Work}/> */}
          <Route exact path="/fun" render={Fun}/>
          <Route exact path="/fun/dungeon" render={Dungeon}/>
          <Route exact path="/now" render={Now}/>
          <Route exact path="/notfound" render={NotFoundPage}/>
          <Route exact path="/startups-vs-big-tech" render={StartupsVersus}/>
          <Redirect from="/*" to="/notfound"/>
        </Switch>
      </div>
  );
}

export default App;