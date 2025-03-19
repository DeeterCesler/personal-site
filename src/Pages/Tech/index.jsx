import React from "react";
import Counter from "quick-count";
import "./style.css";

const Tech = () => {
    return(
        <div className="now">
            <div className="tech-container">
                <h1 className="header" id="work">WORK</h1>
                <div className="readability">
                    <section>
                        <h3>TECH</h3>
                        <div className="item">
                            <h3><a className="link" target="_blank" rel="noreferrer" href="https://www.npmjs.com/package/circle-scroll/">CIRCLE SCROLLER</a>: an NPM package</h3>
                            <p>A free, open-source React module. It's essentially imitating TechCrunch's popup when you read an article and it shows you how far you've read.
                                <br/>
                            Use it now with <code>npm i circle-scroller</code> in your React project.</p>
                        </div>
                        <div className="item">
                            <h3><a className="link" target="_blank" rel="noreferrer" href="https://www.npmjs.com/package/quick-count/">QUICK COUNTER</a>: <Counter>420</Counter></h3>
                            <p>Wrap any number in this component. When the page loads, it'll count up to that number, like so: <Counter time="20">30</Counter>. <br/>You can set the number of seconds, or let it default to 2. It's a neat little visual.</p>
                            <p>Use it now with <code>npm i quick-count</code> in your React project.</p>
                        </div>
                        <div className="item">
                            <h3><a className="link" target="_blank" rel="noreferrer" href="https://crates.io/crates/kaprekar">KAPREKAR</a>: a Rust crate</h3>
                            <p><i>Kaprekar's constant</i> is a fun (but useless) piece of math. I made a free, open-source Rust crate calculating number of iterations for a given input.
                                <br/>
                                <a className="link" target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=d8TRcZklX_Q">Learn about Kaprekar's constant</a> or just <a className="link" target="_blank" rel="noreferrer" href="https://crates.io/crates/kaprekar">use the crate</a> with <code>cargo add kaprekar</code> in your Rust project.</p>
                        </div>
                        {/* <div className="item">
                            <h3 style={{"text-decoration": "line-through"}}>STOCK CHECKER</h3>
                            <p style={{"text-decoration": "line-through"}}>text a stock ticker like <b>TSLA</b> to <i>+1 (224) 347-1019</i> to get the most recent price of that security</p>
                            <p><strong>Unfortuantely, regulations made this type of SMS service illegal</strong> and this is no longer active.<br/>For the life of me, I don't understand why.</p>
                        </div> */}
                        <div className="item">
                            <h3><a className="link" target="_blank" rel="noreferrer" href="http://dungeon-crawler.freeoda.com/">DUNGEON CRAWLER</a>: browser game</h3>
                            <p>keyboard required (AKA desktop only). browser-based game I made back in boot camp while learning jQuery</p>
                        </div>
                        {/* <div className="item">
                            <h3><a className="link" target="_blank" rel="noreferrer" href="https://happy-minsky-a19081.netlify.app/">LASER EYES MAKER</a></h3>
                            <p>add laser eyes to your profile pic</p>
                        </div> */}
                    </section>
                    <br/>
                    <br/>
                    <section>
                        <h3>COPYWRITING</h3>
                        <div className="item">
                            <h3><a className="link" target="_blank" rel="noreferrer" href="https://www.rettsyndrome.org/">International Rett Syndrome Foundation</a>: website redesign</h3>
                            <p>Subcontracting for <a className="link" target="_blank" rel="noreferrer" href="https://cannedspinach.com/">Canned Spinach</a>, I wrote the web copy for the IRSF websites redesign (live as of March 2025).</p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Tech;