import React from "react";

const Dungeon = () => {
    return(
        <div className="now">
            <div className="spacer"/>
            {/* <div className="disappearing-spacer"/> */}
            <h1 className="now-header">DUNGEON CRAWLER</h1>
            <p className="under-header">Note: you need a keyboard for this</p>
            <div className="spacer"/>
            <div className="container">
                <iframe className="iframe" src="http://dungeon-crawler.freeoda.com/" title="Dungeon Crawler"></iframe>
            </div>
            <div className="spacer"/>
            <div className="spacer"/>
        </div>
    )
}

export default Dungeon;