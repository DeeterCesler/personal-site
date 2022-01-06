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
                    <p className="">freelance development contracts</p>
                    <p className="">introducing newbies to programming</p>
                    <p className="">contributing to a <a className="white" href="https://notyourdadsfinance.com" style={{textDecoration: "underline"}}>finance blog</a></p>
                    <br/>
                </div>
            </div>
            <div className="spacer"/>
            <div className="spacer"/>
        </div>
    )
}

export default Now;