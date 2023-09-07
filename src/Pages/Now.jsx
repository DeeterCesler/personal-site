import React from "react";

const Now = () => {
    return(
        <div className="home">
            <div className="container">
                <h1 className="header">NOW</h1>
                <div className="mini-spacer"/>
                <div className="mini-spacer"/>
                <div className="mini-spacer"/>
                <div className="main-text">
                    <p className="now-text"><span role="img" aria-label="man laptop emoji">👨‍💻</span> developing an app to help you complete goals with friends</p>
                    <p className="now-text"><span role="img" aria-label="cog emoji">⚙️</span> introducing newbies to programming 
                    <br/>
                    <br/>
                    (if you're a code newbie, you might be interested in a <a className="white" href="https://www.youtube.com/watch?v=QKXwNPkQeWA&lc=UgxJoW2T0M-_U6V9BhF4AaABAg.9SeSSJyfTQw9Y25tlLcT0f&ab_channel=DeeterCesler">review of my General Assembly experience</a>)</p>
                    <br/>
                </div>
                <div className="mini-spacer"/>
            </div>
        </div>
    )
}

export default Now;
