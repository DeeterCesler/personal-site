import React, {Component} from "react";
import home from '../img/home.jpg'

export default class Logo extends Component{
    render(){
        return(
            <div height="50px" id="logo">
                <a href="/">
                    <img src={home} />
                </a>
            </div>
        )
    }
}