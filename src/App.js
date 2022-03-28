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
ReactGA.initialize('UA-110417068-2');
ReactGA.pageview(window.location.pathname + window.location.search);

const consoleArt = `

██████╗ ███████╗███████╗████████╗███████╗██████╗ 
██╔══██╗██╔════╝██╔════╝╚══██╔══╝██╔════╝██╔══██╗
██║  ██║█████╗  █████╗     ██║   █████╗  ██████╔╝
██║  ██║██╔══╝  ██╔══╝     ██║   ██╔══╝  ██╔══██╗
██████╔╝███████╗███████╗   ██║   ███████╗██║  ██║
╚═════╝ ╚══════╝╚══════╝   ╚═╝   ╚══════╝╚═╝  ╚═╝
                                                 
 ██████╗███████╗███████╗██╗     ███████╗██████╗  
██╔════╝██╔════╝██╔════╝██║     ██╔════╝██╔══██╗ 
██║     █████╗  ███████╗██║     █████╗  ██████╔╝ 
██║     ██╔══╝  ╚════██║██║     ██╔══╝  ██╔══██╗ 
╚██████╗███████╗███████║███████╗███████╗██║  ██║ 
 ╚═════╝╚══════╝╚══════╝╚══════╝╚══════╝╚═╝  ╚═╝ 
                                                 `;

const consoleMessage = `
Welcome! If you're checking the console, you're probably another developer seeing who I am and what I'm about.
    
Happy you're here. I will share any code you see that you're interested, if you ask!

`;


function App(){

  useEffect(()=>{
    console.log(consoleArt);
    console.log(consoleMessage);
  })

  const homepage = () => {
    return <HomePage />
  }
  
  // const work = () => {
  //   return <Work/>
  // }

  const fun = () => {
    return <Fun/>
  }
  
  const dungeon = () => {
    return <Dungeon/>
  }
  
  const now = () => {
    return <Now/>
  }
  
  const notFoundPage = () => {
    return <NotFoundPage />
  }

  return (
      <div className="App">
        <Logo/>
        <Switch>
          <Route exact path="/" render={homepage}/>
          <Route exact from="/index" to="/"/>
          <Route exact path="/index.html" render={homepage}/>
          {/* <Route exact path="/code" render={this.fun}/> */}
          <Route exact path="/fun" render={fun}/>
          <Route exact path="/fun/dungeon" render={dungeon}/>
          <Route exact path="/now" render={now}/>
          <Route exact path="/notfound" render={notFoundPage}/>
          <Redirect from="/*" to="/notfound"/>
        </Switch>
      </div>
  );
}

export default App;