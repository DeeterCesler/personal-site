import React, { useState } from "react";
import JSConfetti from "js-confetti";
import { insta, x_logo, medium, linkedin, github, email } from "./assets/icons";
import PsychedelicBackground from "../../components/PsychedelicBackground";
import ThreeJSModel from "../../components/ThreeJSModel";

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
            <PsychedelicBackground
                showModel={true}
                modelUrl="/models/Flower.glb" 
                modelPosition={[0, 0, 0]} 
                modelScale={1.5}
            >
            <div className="container">
                <section className="top">
                    <div className="top-left">
                        <h1 className="big-name">Deeter<br/>Cesler</h1>
                        <div className="titles">
                            <h3 className="flip-1">I'm a software developer with a marketing background.</h3>
                            {/* <h3 className="shit tiny surprise flip-2" onClick={confetti}><i>{window.innerWidth > '768'?'click' : 'tap'} for surprise</i> <span aria-label="hush emoji" role="img">🤫</span></h3> */}
                        </div>
                    </div>
                    <div className="top-right">
                        <ThreeJSModel 
                            modelUrl="/models/Flower.glb" 
                            position={[0, 0, 0]} 
                            scale={3}
                            initialRotation={{ x: 0, y: -95, z: 0 }}
                        />
                    </div>
                </section>
                <section className="middle">
                    {/* nothing here for now */}
                    {/* <div className="disappearing-spacer"/> */}
                </section>
                <section className="bottom">
                    <div>
                        <div className="links">
                            <p className="link-p"><a className="link" style= {{ textDecoration: "none" }} href="/now">NOW</a></p>
                            <p className="link-p"><a className="link" style= {{ textDecoration: "none" }} href="/work">WORK</a></p>
                            <p className="link-p"><a className="link" style= {{ textDecoration: "none" }} href="/blog">BLOG</a></p>
                        </div>
                        <div className="icons">
                            <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/DeeterCesler">
                                <img alt="twitter/X" color="white" src={x_logo} style={{marginLeft: 0}} />
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
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/deetercesler">
                                <img alt="github" src={github} />
                            </a>
                            <a target="_blank" rel="noopener noreferrer" href="mailto:me+site@deetercesler.com">
                                <img alt="email" src={email} />
                            </a>
                        </div>
                    </div>
                    <div className="mini-spacer"/>
                </section>
            </div>
        </PsychedelicBackground>
        </div>
    )
}

export default HomePage;
