import React from "react";

const Now = () => {
    return(
        <div className="now">
            <div className="spacer"/>
            <div className="container text-center readability">
                <h3 className="row col">Building an app</h3>
                <p className="row col">Right now, I'm beta testing an application to help me get better at networking.</p>
            </div>
            <div className="mini-spacer"/>
            <div className="container text-center readability">
                <h3 className="row col">Launching a JavaScript newsletter</h3>
                <p className="row col">Being a brand-new developer is hard. Since most new devs are learning JavaScript, I want to create a newsletter that teaches them some of the finer things about it.</p>
            </div>
            <div className="mini-spacer"/>
            <div className="container text-center readability">
                <h3 className="row col">Launching a personal newsletter</h3>
                <p className="row col">I like to write, so I'm going to be creating a newsletter of stuff that I'm writing. It'll be about software, money, negotiation—all the stuff that I'm learning myself.</p>
            </div>
            <div className="mini-spacer"/>
        </div>
    )
}

export default Now;