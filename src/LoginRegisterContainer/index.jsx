import React from "react";
import Login from "../Login";
import Registration from "../Registration";
import { Redirect } from 'react-router-dom';

const LoginRegisterContainer = (props) => {
    return(
        <div className="background">
            {props.loggedIn ? <Redirect to="/"/>: <div/> }
            <div className="spacer"/>
            <Login submitRegistration={props.submitRegistration} handleInputs={props.handleInputs} submitLogin={props.submitLogin} loggedIn={props.loggedIn}/>
            <div className="mini-spacer"/>
            {/* When SaaS-ready, replace "Registration" with a buy/sign-up page */}
            <Registration submitRegistration={props.submitRegistration} handleInputs={props.handleInputs} submitLogin={props.submitLogin} loggedIn={props.loggedIn}/>
            <div className="spacer"/>
        </div>
    )
}

export default LoginRegisterContainer;