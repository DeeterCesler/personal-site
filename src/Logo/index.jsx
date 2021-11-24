import React, {Component} from "react";
import home from '../img/home.jpg'

export default class Logo extends Component{
    render(){
        return(
            <div height="250px" id="logo" className="top-nav">
                <a href="/">
                    <img src={home} alt="home" />
                </a>
            </div>
        )
    }
}