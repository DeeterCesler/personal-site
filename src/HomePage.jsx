import React from "react";
import party from "party-js";
import twitter from "./img/icons/twitter.svg"
import insta from "./img/icons/instagram.svg"
import linkedin from "./img/icons/linkedin.svg"
import medium from "./img/icons/medium.svg"
import Scroller from "./Scroller";

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
            <Scroller />
            <div className="container">
                <div className="mini-spacer"></div>
                <h1 className="big-name">Deeter<br/>Cesler</h1>
                <div className="mini-spacer"></div>
                <div className="titles">
                    <h3>I'm a software developer with a marketing background.</h3>
                    <h3 className="subheading">I'll take your idea from zero to MVP.</h3>
                    {/* <h3>sites &#38; software</h3>
                    <h3>email marketing</h3>
                    <h3>startups</h3> */}
                    <h3 className="shit tiny surprise" onClick={ confetti() } ><i>click for surprise</i> <span aria-label="hush emoji" role="img">🤫</span></h3>
                </div>
                <div className="disappearing-spacer"/>
                <div className="header-image"/>
                <div className="disappearing-spacer"/>
                <div className="body">
                    <div className="links">
                        {/* <a className="link" style= {{ textDecoration: "none" }} href="/code">CODE</a> */}
                        <p className="link-p"><a className="link" style= {{ textDecoration: "none" }} href="/fun">FUN</a></p>
                        <p className="link-p"><a className="link" style= {{ textDecoration: "none" }} href="/now">NOW</a></p>
                        <p className="link-p"><a className="link" style= {{ textDecoration: "none" }} href="mailto:me+site@deetercesler.com">EMAIL</a></p>
                    </div>
                    <div className="icons">
                        <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/DeeterCesler">
                            <img alt="twitter" src={twitter} style={{marginLeft: 0}} />
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/deetercesler/">
                            <img alt="insta" src={insta} />
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/deetercesler/">
                            <img alt="linkedin" src={linkedin} />
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://deetercesler.medium.com/">
                            <img alt="medium" src={medium} />
                        </a>
                    </div>
                </div>
                <div className="mini-spacer"/>
            </div>
        </div>
    )
}

export default HomePage;