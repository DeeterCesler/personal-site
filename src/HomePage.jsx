import React from "react";

const HomePage = () => {
    return (
        <div className="background">
            <div className="spacer"></div>
            <h1>Deeter Cesler</h1>
            <h2>Full Stack Web Developer</h2>
            <div className="explainer">
                <p>Have you ever forgotten to follow up with a new connection?</p>
                <p><strong>Never forget again.</strong> FollowUp sends you timed reminders to follow up with contacts you’ve made.</p>
                <br/>
                <div className="cta"><a href="/contacts/new">Become a pro networker</a></div> 
                <div className="cta-2"><a href="/about">See how it works</a></div>
            </div>
        </div>
    )
}

export default HomePage;