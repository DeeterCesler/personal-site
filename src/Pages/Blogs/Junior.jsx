import React from "react";
import Scroller from "circle-scroll";
import Codeblock from "../../components/Codeblock";

const codeblockOne = `if (num < 10) {
    return true
} else {
    return false
} `;

const codeblockTwo = 'return num < 10';

const Junior = () => {
    return(
        <div className="home">
            <div className="container" style={{maxWidth: '60%'}}>
                <h1 className="header">4 Ways to de-Junior Your Code</h1>
                <div className="spacer"/>
                <Scroller>
                    <div className="blog-text">
                        <p>There's no shame in being a junior developer. I was one (and in plenty of technologies, I still am).</p>
                        <p>However, there are a few easy ways to make sure you don't unnecessarily <i>look</i> like one. Add these to your toolbelt.</p>
                        <h3>4. Find and remove any <code>return true</code> or <code>return false</code> in your code</h3>
                        <p>Whenever you have a <code>return <i>boolean</i></code>, you'll almost always find it after an if-check of some kind. That if-check itself is necessarily checking a boolean.</p>
                        <p>Instead of returning true or false, just return the check you did to find it. E.g.:</p>
                        <Codeblock>
                            {codeblockOne}
                        </Codeblock>
                        <p>Can just become</p>
                        <Codeblock>
                            {codeblockTwo}
                        </Codeblock>
                        <p>Sometimes, you might run into a situation where a function returns a boolean sometimes, and a value other times (like an integer or string). </p>
                        <p>If this happens, this is a bad function and should be rewritten. You avoid this problem in typed languages like Rust, TypeScript, and Java. But in a language like JavaScript, it lets you cheat. Don't cheat.</p>
                        <h3>3. Remove Print Statements</h3>
                        <p>Unless you are building a logger, you don't want lingering print statements in your code. We all have the ubiquitous <Codeblock inline="true">console.log('here');</Codeblock> but it shouldn't be left in once you actually push your code.</p>
                        <h3>2. Use a Linter</h3>
                        <p>It doesn't matter so much what code style you commit to—but make it consistent.</p>
                        <p>I recommend <a target="_blank" rel="noreferrer" href="https://eslint.org/">ES Lint</a>. This will find obvious issues with your code and point out solutions without accidentally breaking everything. Minimal setup, maximum headache-prevention.</p>
                        <h3>1. Write Test Cases for Your App's Core Functions</h3>
                        <p>A junior thinks writing tests is a headache. <b>A senior realizes NOT having tests is a migraine.</b></p>
                        <p>If you manage the codebase and aren't just pushing code to it—and especially if you actually have users actively using your code—you will soon care about tests.</p>
                        <p>Tests are forgotten because they don't have immediate output as a new feature. However, if you actually want to have users that <i>consistently</i> use your creation, you need tests.</p>
                        <p>Tests are headache prevention. Tests preserve your brand's quality. Tests are a way to get ahead of problems before you have them, and help you think holistically about how your code might be used by end users.</p>
                        <p>If you don't know where to start with testing, write a unit test for a function. There are lots of open source testing software already out there: jest, mocha, chai, selenium, cypress. Take your pick.</p>
                    </div>
                </Scroller>
                <div className="mini-spacer"/>
                <h2>Other Blogs</h2>
                <br/>
                <ul className="other">
                    <li><a href="/startups-vs-big-tech">Working at Big Tech vs. Startups</a></li>
                    <li><a target="_blank" rel="noreferrer" href="https://deetercesler.medium.com/you-know-more-than-you-think-bcea318b4d09">You Know More Than You Think</a></li>
                    <li><a target="_blank" rel="noreferrer" href="https://deetercesler.medium.com/the-ten-commandments-of-clean-code-89b22a6f01d1">The Ten Commandments of Clean Code</a></li>
                </ul>
                <div className="mini-spacer"/>
            </div>
        </div>
    )
}

export default Junior;