import React from "react";
import ScrollableAnchor from 'react-scrollable-anchor'

const HomePage = () => {
    return (
        <div className="home">
            <ScrollableAnchor id={"home"}>
                <div className="spacer"></div>
            </ScrollableAnchor>
            <h1 className="big-name">Deeter Cesler</h1>
            <h3>full stack web developer</h3>
            <div className="explainer">
                {/* <p>Have you ever forgotten to follow up with a new connection?</p> */}
                <br/>
                {/* <div className="cta"><a href="/contacts/new">Become a pro networker</a></div>  */}
                {/* <div className="cta-2"><a href="/about">See how it works</a></div> */}
            </div>
            <ScrollableAnchor id={"portfolio"}>
                <h2>Portfolio</h2>
            </ScrollableAnchor>
            <div className="spacer"/>
            <ScrollableAnchor id={"about"}>
                <h2>About</h2>
            </ScrollableAnchor>
            <div className="spacer"/>
            <ScrollableAnchor id={"contact"}>
                <h2>Contact</h2>
            </ScrollableAnchor>
            <div className="spacer"/>
        </div>
    )
}

export default HomePage;