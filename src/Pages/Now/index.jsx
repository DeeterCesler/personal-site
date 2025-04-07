import React from "react";
import PsychedelicBackground from "../../components/PsychedelicBackground";
import './style.css'

const Now = () => {
    return(
        <div className="home">
            <PsychedelicBackground>
                <div className="shadow-background-now">
                    <div className="container now">
                        <h1 className="header">NOW</h1>
                        <div className="mini-spacer"/>
                        <p><i>Updated April 7, 2025</i></p>
                        <div className="mini-spacer"/>
                        <div className="mini-spacer"/>
                    <div className="main-text">
                        <p className="now-text"><span role="img" aria-label="pencil emoji">✏️ </span>Ongoing: a copywriting contract for <a className="link" target="_blank" rel="noreferrer" href="https://www.chca-oh.org/">Cincinnati Hills Christian Academy</a></p>
                        <p className="now-text"><span role="img" aria-label="man laptop emoji">👨‍💻 </span>Ongoing: developing an app to help you complete goals with friends</p>
                        <p className="now-text"><span role="img" aria-label="computer emoji">💻 </span>April 7: Just published a new Chrome extension: <a className="link" target="_blank" rel="noreferrer" href="https://github.com/DeeterCesler/dev-grid-extension">Dev Grid</a></p>
                        <p className="now-text"><span role="img" aria-label="iphone emoji">📱 </span>April 2: published a new iOS app: <a className="link" target="_blank" rel="noreferrer" href="https://apps.apple.com/us/app/norse-flashcards/id6743998805?l=es-MX&platform=iphone">Norse Flashcards</a></p>
                        <br/>
                    </div>
                    <div className="mini-spacer"/>
                    </div>
                </div>
            </PsychedelicBackground>
        </div>
    )
}

export default Now;
