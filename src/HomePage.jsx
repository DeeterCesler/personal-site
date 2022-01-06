import React from "react";
import party from "party-js";
// import climb from "./img/climb.JPG"

const HomePage = () => {

    function confetti(){
        if (document.querySelector(".surprise")) {
            document.querySelector(".surprise").addEventListener("click", function (e) {
                party.confetti(this, {
                    count: party.variation.range(20, 40),
                });
            });
        }
    }                     

    return (
        <div className="home">
            <div className="container">
                <div className="spacer"></div>
                <h1 className="big-name">Deeter<br/>Cesler</h1>
                <br/>
                <br/>
                <br/>
                <div className="titles">
                    <h3>sites & software</h3>
                    <h3>email marketing</h3>
                    <h3 className="shit tiny surprise" onClick={ confetti() } ><i>click for surprise</i> 🤫</h3>
                </div>
                <div className="disappearing-spacer"/>
                <div className="disappearing-spacer"/>
                {/* <div className="hero-wrapper"> */}
                    <div className="header-image">
                            {/* <img src={climb}/> */}
                    </div>
                {/* </div> */}
                <div className="disappearing-spacer"/>
                <div className="body">
                    <div className="links">
                        <a className="link" target="_blank" rel="noopener noreferrer" style= {{ textDecoration: "none" }} href="mailto:me+site@deetercesler.com">EMAIL</a>
                        <br/>
                        <a className="link" target="_blank" rel="noopener noreferrer" style= {{ textDecoration: "none" }} href="http://twitter.com/deetercesler">TWITTER</a>
                        <br/>
                        <a className="link" target="_blank" rel="noopener noreferrer" style= {{ textDecoration: "none" }} href="http://instagram.com/deetercesler">INSTA</a>
                        <br/>
                        <a className="link" style= {{ textDecoration: "none" }} href="/fun">FUN</a>
                        <br/>
                        <a className="link" style= {{ textDecoration: "none" }} href="/now">NOW</a>
                        <br/>
                    </div>
                </div>
                <div className="spacer"/>
            </div>
        </div>
    )
}

export default HomePage;