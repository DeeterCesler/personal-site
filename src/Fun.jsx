import React from "react";

const Fun = () => {
    return(
        <div className="now">
            <div className="container">
                <h1 className="header">FUN</h1>
                <div className="readability">
                    <div className="item">
                        <h3>STOCK CHECKER</h3>
                        <p>text a stock ticker (like "AAPL") to +1 (224) 347-1019 to get the last price of that security</p>
                    </div>
                    <div className="item">
                        <h3><a className="link" href="http://dungeon-crawler.freeoda.com/" style= {{ textDecoration: "none" }}>DUNGEON CRAWLER</a></h3>
                        <p>browser-based game I made while learning jQuery. keyboard required</p>
                    </div>
                    <div className="item">
                        <h3><a className="link" href="https://happy-minsky-a19081.netlify.app/" style= {{ textDecoration: "none" }}>LASER EYES MAKER</a></h3>
                        <p>add laser eyes to your profile pic</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Fun;