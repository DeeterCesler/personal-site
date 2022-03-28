import React from "react";
import home from '../img/home.jpg'

const Logo = () => {
    return(
        <div height="250px" id="logo" className="top-nav">
            <a href="/">
                <img src={home} alt="home" />
            </a>
        </div>
    )
}

export default Logo;