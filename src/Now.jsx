import React from "react";

const Now = () => {
    return(
        <div className="now">
            <div className="mini-spacer"/>
            <h1 className="now-header">what I'm doing right now</h1>
            <div className="container text-center">
                <div className="readability">
                    <h3 className="">"a million miles in a thousand years"</h3>
                    <br/>
                    <p className="">I'm reading a book of the above name by Donald Miller. It's a contemplative memoir about viewing your life as a narrative arc.</p>
                    <p className="">Not bad so far.</p>
                    {/* <p className="">If you're interested in using it, <a href="mailto:deeter.cesler@gmail.com">send me a message.</a></p> */}
                </div>
            </div>
            <div className="spacer"/>
            <div className="spacer"/>
            {/* <div className="mini-spacer"/>
            <div className="container text-center readability">
                <h3 className="row col">Launching a JavaScript newsletter</h3>
                <p className="row col">Being a brand-new developer is hard. Since most new devs are learning JavaScript, I want to create a newsletter that teaches them some of the finer things about it.</p>
            </div>
            <div className="mini-spacer"/>
            <div className="container text-center readability">
                <h3 className="row col">Launching a personal newsletter</h3>
                <p className="row col">I like to write, so I'm going to be creating a newsletter of stuff that I'm writing. It'll be about software, money, negotiation—all the stuff that I'm learning myself.</p>
            </div> */}
        </div>
    )
}

export default Now;