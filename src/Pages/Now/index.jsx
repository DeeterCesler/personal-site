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
                        <p><i>Updated Oct 27, 2025</i></p>
                        <div className="mini-spacer"/>
                        <div className="mini-spacer"/>
                    <div className="main-text">
                        <Card
                            id="3"
                            image="/pics/narratize.png" 
                            alt="Narratize"
                            title="Narratize"
                            caption="Ongoing contract: supporting Narratize.com, a platform for internal collaboration, documentation, and knowledge sharing."
                        />
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
