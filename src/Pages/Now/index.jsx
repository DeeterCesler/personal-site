import React from "react";
import PsychedelicBackground from "../../components/PsychedelicBackground";
import Card from "../../components/Card/Card";
import './style.css'

const Now = () => {
    return(
        <div className="home">
            <PsychedelicBackground>
                <div className="shadow-background-now">
                    <div className="container now">
                        <h1 className="header">NOW</h1>
                        <div className="mini-spacer"/>
                        <p><i>Updated Aug 18, 2025</i></p>
                        <div className="mini-spacer"/>
                        <div className="mini-spacer"/>
                    <div className="main-text">
                        <Card 
                            id="1"
                            image="/pics/ana1.png" 
                            alt="Anime Expo Game"
                            title="Anime Expo Game"
                            caption="Ongoing contract: developing an game that's been played at Anime Expo LA (NYC Comic Con next!)"
                        />
                        <Card 
                            id="2"
                            alt="Goals App"
                            title="Goals App"
                            caption="Ongoing fun project: developing an app to help you complete goals with friends"
                        />
                        <Card
                            id="3"
                            image="/pics/chca.png" 
                            alt="CHCA Copywriting"
                            title="CHCA Copywriting"
                            caption="June 30: finished a copywriting contract for Cincinnati Hills Christian Academy"
                            link="https://www.chca-oh.org/"
                        />
                        <Card
                            id="4"
                            alt="Dev Grid Extension"
                            title="Dev Grid Extension"
                            caption="April 7: Just published a new Chrome extension: Dev Grid"
                            link="https://github.com/DeeterCesler/dev-grid-extension"
                        />
                        <Card
                            id="5"
                            image="/pics/norse.jpg" 
                            alt="Norse Flashcards"
                            title="Norse Flashcards"
                            caption="April 2: published a new iOS app: Norse Flashcards"
                            link="https://apps.apple.com/us/app/norse-flashcards/id6743998805?l=es-MX&platform=iphone"
                        />
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
