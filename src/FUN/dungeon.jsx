import React from "react";
import WaveCanvas from "../components/WaveCanvas";

const Dungeon = () => {
    return(
        <div className="">
            <WaveCanvas />
            <div className="container">
                {/* <div className="disappearing-spacer"/> */}
                <h1 className="header" style={{textAlign: "center"}}>DUNGEON CRAWLER</h1>
                <div className="">
                    <iframe className="iframe" src="/dungeon/index.html" title="Dungeon Crawler"></iframe>
                </div>
            </div>
        </div>
    )
}

export default Dungeon;