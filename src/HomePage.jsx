import React, { useState } from "react";
import JSConfetti from "js-confetti";
import twitter from "./img/icons/twitter.svg"
import insta from "./img/icons/instagram.svg"
import linkedin from "./img/icons/linkedin.svg"
import medium from "./img/icons/medium.svg"
import email from "./img/icons/email.svg"

const HomePage = () => {
    const [confettiNumber, setConfettiNumber] = useState(1);
    const jsConfetti = new JSConfetti()

    const confetti = () =>{
        switch (confettiNumber) {
            case 1:
                jsConfetti.addConfetti({
                    emojis: ['💥','⚡️'],
                });
                break;
            case 2:
                    jsConfetti.addConfetti({
                        emojis: ['🇺🇸'],
                    });
                    jsConfetti.addConfetti({
                        confettiColors: ['#CF0707','#fff','#0743CF']
                    });
                break;
            case 3:
                    jsConfetti.addConfetti({
                        emojis: ['🌈'],
                    });
                    jsConfetti.addConfetti({
                        confettiColors: ['#CF0707','#0ECF07','#0743CF','#9307CF','#FFB712']
                    });
                break;
            default:
                jsConfetti.addConfetti();
                break;


        }
        if(confettiNumber === 3) setConfettiNumber(1);
        else setConfettiNumber(confettiNumber+1);
    };  

    return (
        <div className="home">
            <div className="container">
                <div className="mini-spacer"></div>
                <h1 className="big-name">Deeter<br/>Cesler</h1>
                <div className="mini-spacer"></div>
                <div className="titles">
                    <h3 className="flip-1">I'm a software developer with a marketing background.</h3>
                    <h3 className="subheading flip-2">I'll take your idea from zero to MVP.</h3>
                    {/* <h3>sites &#38; software</h3>
                    <h3>email marketing</h3>
                    <h3>startups</h3> */}
                    <h3 className="shit tiny surprise flip-3" onClick={confetti}><i>click for surprise</i> <span aria-label="hush emoji" role="img">🤫</span></h3>
                </div>
                <div className="disappearing-spacer"/>
                <div className="header-image"/>
                <div className="disappearing-spacer"/>
                <div className="body">
                    <div className="links">
                        {/* <a className="link-p" style= {{ textDecoration: "none" }} href="/code">CODE</a> */}
                        {/* <p className="link-p"><a className="link" style= {{ textDecoration: "none" }} href="/work">WORK</a></p> */}
                        <p className="link-p"><a className="link" style= {{ textDecoration: "none" }} href="/now">NOW</a></p>
                        <p className="link-p"><a className="link" style= {{ textDecoration: "none" }} href="/blog">BLOG</a></p>
                        <p className="link-p"><a target="_blank" rel="noreferrer" className="link" style= {{ textDecoration: "none" }} href="https://deeter.gumroad.com/l/TSXqK">WRITE BETTER EMAILS</a></p>
                        <p className="link-p"><a className="link" style= {{ textDecoration: "none" }} href="/tech">TECH</a></p>
                    </div>
                    <div className="icons">
                        <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/DeeterCesler">
                            <img alt="twitter" src={twitter} style={{marginLeft: 0}} />
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/deetercesler/">
                            <img alt="insta" src={insta} />
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/deetercesler/">
                            <img alt="linkedin" src={linkedin} />
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://deetercesler.medium.com/">
                            <img alt="medium" src={medium} />
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="mailto:me+site@deetercesler.com">
                            <img alt="email" src={email} />
                        </a>
                    </div>
                </div>
                <div className="mini-spacer"/>
            </div>
        </div>
    )
}

export default HomePage;