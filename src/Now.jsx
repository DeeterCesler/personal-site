import React from "react";

const Now = () => {
    return(
        <div className="now">
            <div className="mini-spacer"/>
            <h1 className="now-header">what I'm doing right now</h1>
            <div className="container text-center">
                <div className="readability">
                    <h3 className="">"Made in Cincinnati" podcast</h3>
                    <br/>
                    <p className="">I recorded and am currently cutting interviews of several Cincinnati-based entrepreneurs and creators.</p>
                    <p> I'm hoping to inspire other makers and shine a spotlight on the people making moves in the Queen City.</p>
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