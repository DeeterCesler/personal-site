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
                    <h3 className="shit"><a className="tiny surprise" onClick={ 
                        confetti()
                    } style= {{ textDecoration: "none" }} ><i>click for surprise</i> 🤫</a></h3>
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
                    <div className="shit">
                        <a className="" style= {{ textDecoration: "none" }} href="mailto:deeter.cesler@gmail.com">EMAIL</a>
                        <br/>
                        <a className="" style= {{ textDecoration: "none" }} href="http://twitter.com/deetercesler">TWITTER</a>
                        <br/>
                        <a className="" style= {{ textDecoration: "none" }} href="http://instagram.com/deetercesler">INSTA</a>
                        <br/>
                        <a style= {{ textDecoration: "none" }} href="/now">NOW</a>
                        <br/>
                    </div>
                </div>
                <div className="spacer"/>
            </div>
        </div>
    )
}

export default HomePage;