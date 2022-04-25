import React from "react";

const Now = () => {
    return(
        <div className="home">
            <div className="container">
                <h1 className="header">NOW</h1>
                <div className="spacer"/>
                <div className="main-text">
                    <p className="now-text">learning <strong>Rust</strong> (my most recent language before this is TypeScript)</p>
                    <p className="now-text">product owner @ <a className="white" href="https://sharetalent.co/">share talent</a></p>
                    <p className="now-text">freelance development contracts: bringing greenfield startup ideas to life from wireframes</p>
                    <p className="now-text">keeping a 970+ day streak on <a className="white" href="https://www.duolingo.com/profile/Deeter">Duolingo</a> with Italian &#38; Spanish</p>
                    <p className="now-text">contributing to a <a className="white" href="https://notyourdadsfinance.com">finance blog</a></p>
                    <p className="now-text">introducing newbies to programming <br/>(if that's you, you might be interested in my <a className="white" href="https://www.youtube.com/watch?v=QKXwNPkQeWA&lc=UgxJoW2T0M-_U6V9BhF4AaABAg.9SeSSJyfTQw9Y25tlLcT0f&ab_channel=DeeterCesler">review of my General Assembly experience</a>)</p>
                    <br/>
                </div>
                <div className="mini-spacer"/>
            </div>
        </div>
    )
}

export default Now;