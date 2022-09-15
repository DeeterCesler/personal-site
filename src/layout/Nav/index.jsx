import React from "react";
import home from './img/home.jpg'

const Nav = () => {
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

export default Nav;