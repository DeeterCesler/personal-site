import React from "react";

const Fun = () => {
    return(
        <div className="now">
            <div className="container">
                <h1 className="header">FUN</h1>
                <div className="readability">
                    <div className="item">
                        <h3><a className="link" href="https://www.npmjs.com/package/circle-scroll/">CIRCLE-SCROLLER</a>: my NPM package</h3>
                        <p>A free, open-source React module. It's essentially imitating TechCrunch's popup when you read an article and it shows you how far you've read.
                            <br/>
                        Use it now with <code>npm i circle-scroller</code> in your React project.</p>
                    </div>
                    <div className="item">
                        <h3>STOCK CHECKER</h3>
                        <p>text a stock ticker like <b>TSLA</b> to <i>+1 (224) 347-1019</i> to get the most recent price of that security</p>
                    </div>
                    <div className="item">
                        <h3><a className="link" href="http://dungeon-crawler.freeoda.com/">DUNGEON CRAWLER</a>: browser game</h3>
                        <p>keyboard required (AKA desktop only). browser-based game I made back in boot camp while learning jQuery</p>
                    </div>
                    <div className="item">
                        <h3><a className="link" href="https://happy-minsky-a19081.netlify.app/">LASER EYES MAKER</a></h3>
                        <p>add laser eyes to your profile pic</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Fun;