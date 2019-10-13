import React from "react";
import ScrollableAnchor from 'react-scrollable-anchor'
import Contact from "./Contact";
import Portfolio from "./Portfolio";

const HomePage = () => {
    return (
        <div className="home">
            <div className="wrapper">
                <ScrollableAnchor id={"home"}>
                    <div className="spacer"></div>
                </ScrollableAnchor>
                <h1 className="big-name">Deeter Cesler</h1>
                <h3>full stack web developer</h3>
                {/* <div className="spacer"/> */}
                <div className="fader"/>
                <div className="second-wrapper">
                    <div className="explainer">
                        {/* <p>Have you ever forgotten to follow up with a new connection?</p> */}
                        <br/>
                        {/* <div className="cta"><a href="/contacts/new">Become a pro networker</a></div>  */}
                        {/* <div className="cta-2"><a href="/about">See how it works</a></div> */}
                    </div>
                    <ScrollableAnchor id={"portfolio"}>
                        <Portfolio/>
                    </ScrollableAnchor>
                    <div className="spacer"/>
                    <ScrollableAnchor id={"about"}>
                        <h2>About</h2>
                    </ScrollableAnchor>
                    <div className="spacer"/>
                    <ScrollableAnchor id={"contact"}>
                        <Contact/>
                    </ScrollableAnchor>
                    <div className="spacer"/>
                </div>
            </div>
        </div>
    )
}

export default HomePage;