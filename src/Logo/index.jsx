import React from "react";
import home from '../img/home.jpg'

const Logo = () => {
    return(
        <div className="top-nav">
            <div className="logo">
                <a href="/">
                    <img src={home} alt="home" />
                </a>
            </div>
            <div className="glow" />
        </div>
    )
}

export default Logo;