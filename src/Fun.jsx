import React from "react";

const Fun = () => {
    return(
        <div className="now">
            <div className="container">
                <div className="spacer"/>
                {/* <div className="disappearing-spacer"/> */}
                <h1 className="header">FUN</h1>
                <br/>
                <br/>
                <div className="">
                    <div className="readability">
                        <h3><a className="link" href="http://dungeon-crawler.freeoda.com/" style= {{ textDecoration: "none" }}>DUNGEON CRAWLER</a></h3>
                        <p>browser-based game I made while learning jQuery. keyboard required</p>
                        <br/>
                        <br/>
                        <h3><a className="link" href="https://happy-minsky-a19081.netlify.app/" style= {{ textDecoration: "none" }}>LASER EYES MAKER</a></h3>
                        <p>add laser eyes to your profile pic</p>
                        <br/>
                    </div>
                </div>
                <div className="spacer"/>
                <div className="spacer"/>
            </div>
        </div>
    )
}

export default Fun;