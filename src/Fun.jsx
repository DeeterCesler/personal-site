import React from "react";

const Fun = () => {
    return(
        <div className="now">
            <div className="container">
                <h1 className="header">FUN</h1>
                <div className="readability">
                    <div className="item">
                        <h3><a className="link" href="https://www.npmjs.com/package/circle-scroll/">CIRCLE-SCROLLER</a>: my NPM package</h3>
                        <p>A free, open-source React module. It's essentially imitating TechCrunch's popup when you read an article and it shows you how far you've read.
                            <br/>
                        Use it now with <code>npm i circle-scroller</code> in your React project.</p>
                    </div>
                    <div className="item">
                        <h3><a className="link" href="https://crates.io/crates/kaprekar">KAPREKAR</a>: a Rust crate</h3>
                        <p><i>Kaprekar's constant</i> is a fun (but useless) piece of math. I made a free, open-source Rust crate calculating number of iterations for a given input.
                            <br/>
                            <a className="link" href="https://www.youtube.com/watch?v=d8TRcZklX_Q">Learn about Kaprekar's constant</a> or just <a className="link" href="https://crates.io/crates/kaprekar">use the crate</a> with <code>cargo add kaprekar</code> in your Rust project.</p>
                    </div>
                    <div className="item">
                        <h3>STOCK CHECKER</h3>
                        <p>text a stock ticker like <b>TSLA</b> to <i>+1 (224) 347-1019</i> to get the most recent price of that security</p>
                    </div>
                    <div className="item">
                        <h3><a className="link" href="http://dungeon-crawler.freeoda.com/">DUNGEON CRAWLER</a>: browser game</h3>
                        <p>keyboard required (AKA desktop only). browser-based game I made back in boot camp while learning jQuery</p>
                    </div>
                    <div className="item">
                        <h3><a className="link" href="https://happy-minsky-a19081.netlify.app/">LASER EYES MAKER</a></h3>
                        <p>add laser eyes to your profile pic</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Fun;