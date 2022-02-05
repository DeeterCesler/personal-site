import React from "react";

const Now = () => {
    return(
        <div className="home">
            <div className="spacer"/>
            {/* <div className="disappearing-spacer"/> */}
            <h1 className="now-header">what I'm doing right now</h1>
            <div className="spacer"/>
            <div className="">
                <div className="readability">
                    <p className="now-text">freelance development contracts</p>
                    <p className="now-text">introducing newbies to programming <br/>(if that's you, you might be interested in my <a className="white" style={{textDecoration: "underline"}} href="https://www.youtube.com/watch?v=QKXwNPkQeWA&lc=UgxJoW2T0M-_U6V9BhF4AaABAg.9SeSSJyfTQw9Y25tlLcT0f&ab_channel=DeeterCesler">review of my General Assembly experience</a>)</p>
                    <p className="now-text">keeping a 900+ day streak on <a className="white" href="https://www.duolingo.com/profile/Deeter" style={{textDecoration: "underline"}}>Duolingo</a></p>
                    <p className="now-text">contributing to a <a className="white" href="https://notyourdadsfinance.com" style={{textDecoration: "underline"}}>finance blog</a></p>
                    <br/>
                </div>
            </div>
            <div className="spacer"/>
            <div className="spacer"/>
        </div>
    )
}

export default Now;