import React from "react";
import PsychedelicBackground from "../components/PsychedelicBackground";

const Now = () => {
    return(
        <div className="home">
            <PsychedelicBackground>
                <div className="container">
                    <h1 className="header">NOW</h1>
                    <div className="mini-spacer"/>
                    <p><i>Updated December 24, 2024</i></p>
                    <div className="mini-spacer"/>
                    <div className="mini-spacer"/>
                    <div className="main-text">
                        <p className="now-text"><span role="img" aria-label="seedling emoji">✏️</span> another copywriting contract</p>
                        <p className="now-text"><span role="img" aria-label="man laptop emoji">👨‍💻</span> developing an app to help you complete goals with friends</p>
                        <br/>
                    </div>
                    <div className="mini-spacer"/>
                </div>
            </PsychedelicBackground>
        </div>
    )
}

export default Now;
