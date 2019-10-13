import React from "react";
import ScrollableAnchor from 'react-scrollable-anchor'
import Contact from "./Contact";
import Portfolio from "./Portfolio";
import About from "./About";

const HomePage = () => {
    return (
        <div className="home">
            <div className="wrapper">
                <ScrollableAnchor id={"home"}>
                    <div className="spacer"></div>
                </ScrollableAnchor>
                <h1 className="big-name">Deeter Cesler</h1>
                <h3>full stack web developer</h3>
                <div className="fader"/>
                <div className="second-wrapper">
                    <ScrollableAnchor id={"portfolio"}>
                        <div>
                            <div className="nav-spacer"/>
                            <Portfolio/>
                        </div>
                    </ScrollableAnchor>
                    <div className="mini-fader"/>
                    <div className="second-wrapper">
                        <ScrollableAnchor id={"about"}>
                            <div>
                                <div className="nav-spacer"/>
                                <About/>
                            </div>
                        </ScrollableAnchor>
                    </div>
                    <div className="last-fader"/>
                    <div className="last-wrapper">
                        <ScrollableAnchor id={"contact"}>
                            <div>
                                <div className="nav-spacer"/>
                                <Contact/>
                            </div>
                        </ScrollableAnchor>
                        <div className="mini-spacer"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage;