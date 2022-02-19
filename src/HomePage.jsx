import React from "react";
import party from "party-js";
// import climb from "./img/climb.JPG"
import twitter from "./img/icons/twitter.svg"
import insta from "./img/icons/instagram.svg"
import linkedin from "./img/icons/linkedin.svg"
import medium from "./img/icons/medium.svg"

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
                        <a className="link" style= {{ textDecoration: "none" }} href="/fun">FUN</a>
                        <a className="link" style= {{ textDecoration: "none" }} href="/now">NOW</a>
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
                {/* <img alt="" src="https://dd7tel2830j4w.cloudfront.net/f1621814341272x967009966776231000/linkedin.svg" style="display: block; margin: 0px; width: 100%; height: 100%; border-radius: 0px;"/>
                <img alt="" src="https://dd7tel2830j4w.cloudfront.net/f1621814365201x168155780258922000/facebook.svg" style="display: block; margin: 0px; width: 100%; height: 100%; border-radius: 0px;"/>
                <img alt="" src="https://dd7tel2830j4w.cloudfront.net/f1621814376859x736595022725044900/instagram.svg" style="display: block; margin: 0px; width: 100%; height: 100%; border-radius: 0px;"/>
                <img alt="" src="https://dd7tel2830j4w.cloudfront.net/f1622179888872x493476946416596860/medium%201.svg" style="display: block; margin: 0px; width: 100%; height: 100%; border-radius: 0px;"/> */}
                <div className="mini-spacer"/>
            </div>
        </div>
    )
}

export default HomePage;