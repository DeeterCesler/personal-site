import React from "react";
import PsychedelicBackground from "../../components/PsychedelicBackground";
import './style.css'

const Now = () => {
    return(
        <div className="home">
            <PsychedelicBackground>
                <div className="container now">
                    <h1 className="header">NOW</h1>
                    <div className="mini-spacer"/>
                    <p><i>Updated March 26, 2025</i></p>
                    <div className="mini-spacer"/>
                    <div className="mini-spacer"/>
                    <div className="main-text">
                        <p className="now-text"><span role="img" aria-label="seedling emoji">✏️</span> another copywriting contract for <a className="link" target="_blank" rel="noreferrer" href="https://www.chca-oh.org/">Cincinnati Hills Christian Academy</a></p>
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
