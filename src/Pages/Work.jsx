import React from "react";

const Work = () => {
    return(
        <div className="work">
            <div className="mini-spacer"/>
            <h1 className="header">what I've done</h1>
            <p>writing, coding, and marketing</p>
            <br/>
            <br/>
            <h3>Software</h3>
            <br/>
            <div className="readability">
                <h3 className="">Black Business Directory</h3>
                <br/>
                <p className="">I made a directory to help people search and find black-owned businesses in the Denver area. It uses a Google sheet as a backend, which was kind of fun.
                <br/>
                <br/>
                It's a super simple demo at the moment. <a href="https://jolly-mcclintock-6977ca.netlify.app/">Check it out.</a></p>
            </div>
            <div className="mini-spacer"/>
            <div className="readability">
                <h4><a href="https://headsup.guru/" target="_blank" rel="noopener noreferrer">HeadsUp.guru</a></h4>
                <h6>Simple, timed email reminders</h6>
                <br/>
                <p>Never forget to follow up with a new contact ever again. 
                <br/>
                <a target="_blank" rel="noopener noreferrer" href="https://headsup.guru/">Get started for free.</a></p>
            </div>
            <div className="mini-spacer"/>
            <div className="readability">
                <h4><a href="https://fetchspot.io/" target="_blank" rel="noopener noreferrer">Fetchspot.io</a></h4>
                <h6>Instantly create live, static JSON endpoints</h6>
                <br/>
                <p>Ideal for frontend developers who don't have a backend. 
                <br/>
                <a target="_blank" rel="noopener noreferrer" href="https://fetchspot.io/">Plans start at just $0.99.</a></p>
            </div>
            <div className="spacer"/>
            <h3>Writing</h3>
            <br/>
            <div className="readability">
                <h4>The Ten Commandments of Clean Code</h4>
                <h6>Selected by Medium.com's editors for the <i>Programming</i> category.</h6>
                <br/>
                <p>If you're new to coding, or just suck at clean coding, <a target="_blank" rel="noopener noreferrer" href="https://medium.com/@deetercesler/the-ten-commandments-of-clean-code-89b22a6f01d1">follow these 10 rules</a> and you're 80% there.</p>
            </div>
            <div className="mini-spacer"/>
            <div className="readability">
                <h4>Increase your email engagement by 600%</h4>
                <h6>PDF guide, available on <a href="https://gumroad.com/l/TSXqK" target="_blank" rel="noopener noreferrer">Gumroad</a></h6>
                <br/>
                <p>I figured out how to turn around a marketing campaign that was going nowhere. <a href="https://600percent.com" target="_blank" rel="noopener noreferrer">You can too.</a></p>
            </div>
            <div className="mini-spacer"/>
            <div className="readability">
                <h4>Pepsi's failure in the Jenner ad controversy</h4>
                <h6>An old article, but it still makes me laugh.</h6>
                <br/>
                <p>Chosen by SmartBrief's editors for their <i>Marketing</i> newsletter. <a href="https://www.smartbrief.com/original/2017/04/pepsis-failure-jenner-ad-controversy" rel="noopener noreferrer" target="_blank">My thoughts on how Pepsi <i>should've</i> responded</a> when their ill-fated ad didn't go their way.</p>
            </div>
            <div className="spacer"/>
        </div>
    )
}

export default Work;