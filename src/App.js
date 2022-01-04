import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import HomePage from './HomePage';
import Logo from './Logo'
import Work from './Work';
import Fun from './Fun';
import Now from './Now';
import ReactGA from 'react-ga';
import NotFoundPage from './NotFoundPage';
ReactGA.initialize('UA-110417068-2');
ReactGA.pageview(window.location.pathname + window.location.search);

const backendURL = process.env.REACT_APP_BACKEND_SERVER_ADDRESS

class App extends Component {
  constructor(){
    super();
    this.state = {
      loggedIn: false,
      email: "deeter.cesler@gmail.com",
      blog: null
    }
  }


  checkForCookie = async () => {
    console.log("getting token: ", localStorage.getItem("token"))
    if(localStorage.getItem("token") !== "null"){
      try{
        const targetUrl = backendURL + "auth/verify";
        console.log("GETTING THIS SHIT, bruh")
        const getUser = await fetch(targetUrl, {
          method: 'POST',
          // body: localStorage.token,
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Headers': "POST",
            'credentials': 'same-origin',
            "Authorization": localStorage.getItem("token")
          } 
        });
        const parsedResponse = await getUser.json();
        console.log("parsedREsponse: ", parsedResponse);
        if(parsedResponse.status === 200){
          this.setState({
            loggedIn: true,
            // email: parsedResponse.email
          })
          if(localStorage.getItem("loggedIn") !== "true"){
            localStorage.setItem("loggedIn", true);
          }
          // localStorage.setItem("email", parsedResponse.);
        } else if (parsedResponse.status === 500){
          console.log("INTERNAL SERVER ERROR")
          this.setState({
            loggedIn: false,
            // email: ""
          })
        } else if (parsedResponse.status === 404){
          console.log("NO USER FOUND")
          localStorage.setItem("loggedIn", false);
          this.setState({
            loggedIn: false,
            // email: ""
          })
        } else {
          this.setState({
            loggedIn: false,
            // email: ""
          })
        }
      } catch(err){
        console.log("failed to get cookie", err);
        localStorage.setItem("loggedIn", false);
        localStorage.setItem("email", null);
        localStorage.setItem("token", null);
        this.setState({
          loggedIn: false
        })
      }
    } else{
      console.log("else statement hit");
      this.setState({
        loggedIn: false
      })
    }
    return
  }


  componentDidMount(){
    this.checkForCookie();
  }

  setToken = (token) => {
    localStorage.setItem("token", token);
  }

  homepage = () => {
    return <HomePage />
  }
  
  work = () => {
    return <Work/>
  }

  fun = () => {
    return <Fun/>
  }
  
  now = () => {
    return <Now/>
  }
  
  notFoundPage = () => {
    return <NotFoundPage />
  }

  render(){
    return (
        <div className="App">
          <Logo/>
          <Switch>
            <Route exact path="/" render={this.homepage}/>
            <Route exact from="/index" to="/"/>
            <Route exact path="/index.html" render={this.homepage}/>
            <Route exact path="/fun" render={this.fun}/>
            <Route exact path="/now" render={this.now}/>
            <Route exact path="/notfound" render={this.notFoundPage}/>
            <Redirect from="/*" to="/notfound"/>
          </Switch>
        </div>
    );
  }
}

export default App;