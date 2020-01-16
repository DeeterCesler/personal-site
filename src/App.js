import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import HomePage from './HomePage';
import Newblog from './Newblog/index';
import AllblogsContainer from './AllblogsContainer';
import NavBar from './NavBar';
import LoginRegisterContainer from './LoginRegisterContainer';
import LogoutPage from './LogoutPage';
import Now from './Now';
import Blog from './Blog';
import Singleblog from './Singleblog';
import ReactGA from 'react-ga';
// ReactGA.initialize('UA-110417068-2');
// ReactGA.pageview(window.location.pathname + window.location.search);

const backendURL = process.env.REACT_APP_BACKEND_SERVER_ADDRESS

class App extends Component {
  constructor(){
    super();
    this.state = {
      loggedIn: "",
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

  handleInputs = (e) => {
    this.setState({
      ...this.state,
      [e.currentTarget.name]: e.currentTarget.value
    })
  }

  submitRegistration = async (e) => {
    e.preventDefault();
    try{
      const targetUrl = backendURL + 'auth/register'
      const createUser = await fetch(targetUrl, {
        method: 'POST',
        body: JSON.stringify(this.state),
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Headers': "POST"
        } 
      });
      const parsedResponse = await createUser.json();
      if(parsedResponse.status === 200){
        this.setState({
          loggedIn: true,
          email: parsedResponse.data.email,
          id: parsedResponse.data._id
        })
      } else if (parsedResponse.status === 500){
        console.log("INTERNAL SERVER ERROR")
      }
    }catch(err){
      console.log(err, " error")
    }
  }

  submitLogin = async (e) => {
    e.preventDefault();
    console.log(this.state)
    let parsedLogged;
    try{
      console.log("submitting login");
      const targetUrl = backendURL;
      const loggedUser = await fetch(targetUrl + 'auth/login', {
        method: 'POST',
        body: JSON.stringify(this.state),
        headers: {
          'Access-Control-Allow-Origin': targetUrl,
          'Content-Type': 'application/json',
          'credentials': 'same-origin',
        } 
      });
      parsedLogged = await loggedUser.json();
      // res => setToken(res.token);
      if(parsedLogged.status === 200){
        this.setState({
          loggedIn: true,
          email: parsedLogged.data.email,
          id: parsedLogged.data._id
        });
        localStorage.setItem("token", parsedLogged.token);
        localStorage.setItem("email", parsedLogged.data.email);
        localStorage.setItem("id", parsedLogged.data._id);
      } 
      else if (parsedLogged.status === 500){
        console.log("INTERNAL SERVER ERROR")
      } else {
        console.log("parsed log and shiiiiit:", parsedLogged);
      }
    }catch(err){
      // console.log("parsed: ", parsedLogged);
      console.log(parsedLogged);
      console.log("Error, boi: ", err)
    }
  }

  logout = () => {
    console.log("LOGGING OUT")
    localStorage.setItem("loggedIn", false)
    localStorage.setItem("email", null)
    localStorage.setItem("id", null)
    localStorage.setItem("token", null)
    this.setState({
      loggedIn: false,
      email: "",
      password: ""
    })
  }

  setToken = (token) => {
    localStorage.setItem("token", token);
  }

  homepage = () => {
    return <HomePage />
  }

  newblog = () => {
    return <Newblog loggedIn={this.state.loggedIn}/>
  }
  
  allblogs = () => {
    return <AllblogsContainer loggedIn={this.state.loggedIn}/>
  }
  
  singleblog = () => {
    return <Singleblog loggedIn={this.state.loggedIn}/>
  }

  loginRegisterPage = () => {
    return <LoginRegisterContainer loggedIn={this.state.loggedIn} submitLogin={this.submitLogin} handleInputs={this.handleInputs} submitRegistration={this.submitRegistration}/>
  }
  
  logoutPage = () => {
    return <LogoutPage logout={this.logout}/>
  }
  
  now = () => {
    return <Now/>
  }
  
  blog = () => {
    return <Blog/>
  }

  render(){
    return (
        <div className="App">
          <NavBar loggedIn={this.state.loggedIn}/>
          <Switch>
            {/* <Route exact path="/home" redi ={this.homepage}/> */}
            <Route exact path="/" render={this.homepage}/>
            <Route exact path="/about" render={this.aboutPage}/>
            <Route exact path="/login" render={this.loginRegisterPage}/>
            <Route exact path="/logout" render={this.logoutPage}/>
            <Route exact path="/register" render={this.loginRegisterPage}/>
            <Route exact path="/blog/new" render={this.newblog}/>
            <Route exact path="/blog" render={this.allblogs}/>
            <Route exact path="/now" render={this.now}/>
            <Route exact path="/:blog" render={this.singleblog}/>
          </Switch>
        </div>
    );
  }
}

export default App;