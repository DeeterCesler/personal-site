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
                <div className="mini-spacer"></div>
                <h1 className="big-name">Deeter<br/>Cesler</h1>
                <br/>
                <br/>
                <br/>
                <div className="titles">
                    <h3>sites & software</h3>
                    <h3>email marketing</h3>
                    <h3 className="shit tiny surprise" onClick={ confetti() } ><i>click for surprise</i> <span aria-label="hush emoji" role="img">🤫</span></h3>
                </div>
                <div className="disappearing-spacer"/>
                <div className="disappearing-spacer"/>
                <div className="header-image"/>
                <div className="disappearing-spacer"/>
                <div className="body">
                    <div className="links">
                        <a className="link" style= {{ textDecoration: "none" }} href="mailto:me+site@deetercesler.com">EMAIL</a>
                        <a className="link" target="_blank" rel="noopener noreferrer" style= {{ textDecoration: "none" }} href="http://twitter.com/deetercesler">TWITTER</a>
                        <a className="link" target="_blank" rel="noopener noreferrer" style= {{ textDecoration: "none" }} href="http://instagram.com/deetercesler">INSTA</a>
                        <a className="link" style= {{ textDecoration: "none" }} href="/fun">FUN</a>
                        <a className="link" style= {{ textDecoration: "none" }} href="/now">NOW</a>
                    </div>
                </div>
                <div className="mini-spacer"/>
            </div>
        </div>
    )
}

export default HomePage;