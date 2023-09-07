import React from "react";
import BlogContainer from "../../components/BlogContainer";

const StartupsVersus = () => {
    return(
        <BlogContainer title="Working at Big Tech vs. Startups">
            <p>You know that one saying about driving? <b>Everyone slower than you is an idiot, and everyone faster than you is a maniac.</b></p>
            <p>The same sentiment is true in tech companies.</p>
            <p>There's a big difference in the culture of coding for a big tech company versus startups. Every tech company thinks they like to move fast with high quality. But those mean very different things depending on the company. For Big Tech Co, fast might mean six months. Any sooner than that, and (probably fairly) your project could be considered rushed.</p>
            <p>Compare that to a startup. "Hey, if we don't ship this feature next week, the client will leave and we won't make payroll."</p>
            <p><b>The culture of the software development cycle is different because the business needs (internal and external) are so vastly different.</b> If you try to bring one into the other, that’s when frustration happens.</p>
            <br/>
            <h3>Working at Big Tech Co™</h3>
            <p><b>I contracted for a Big Tech Co you've definitely heard of</b> through a third party. Our third party was complimented for the speed in which we executed. Shipping major updates once a month was unheard of. Even as a junior developer, I was certainly slower than everyone else, and was <i>still</i> able to actively contribute to meaningful platform updates within three months of my start date.</p>
            <p>And yet it still felt so slow. We had to get approval from <i>every</i> team if it was going to affect them. And that was the right thing to do.</p>
            <p>The biggest lesson I learned: <b>build consensus early</b>.</p>
            <p>How I learned to think about working at Big Tech Co:</p>
            <ul style={{marginTop: '-20px'}}>
                <li>Work on your communication and think about how to be helpful to your leads.</li>
                <li>Lower your expecations for speed. Is the security team briefed on what you’re doing? Have they been able to manage the risks your product will add (e.g. checking dependencies and packages you’re adding to the platform)?</li>
                <li>Expect longer lead times for QA departments to approve (or disapprove) your code.</li>
                <li>If you don't have an embedded SDET or SDET teams, expect to write your own unit tests (as I believe each dev should be doing anyway).</li>
                <li>You'll be slower to adopt new tech (which is good in this context), so get pro-level at whatever stack you're using.
                    <ul>
                        <li>E.g. if you're using JS, learn about <a target="_blank" rel="noreferrer noopener" href="https://www.youtube.com/watch?v=Bv_5Zv5c-Ts&t=44s">the weird parts</a></li>
                        <li>Learn the basics of every layer in your stack, like how to move fluidly between DB, to server, to frontend, to cloud</li>
                        <li>If your company has a style guide, get intimately familiar. Teach other people how to follow it (or build a linter that can implement it for you)</li>
                    </ul>
                </li>
            </ul>
            <p>In sum, take some initiative <i>in the direction your company wants to go.</i> Never go solo. Get your team and leaders' buy-in. If you try to move on your own, you'll get frustrated and so will the people around you.</p>
            <br/>
            <h3>Working at Scrappy Startup Inc</h3>
            <p>More recently, I've contracted with two small startups. Both of them have multiple people on the team, but none are full-time. They are bootstrapped, but with enough funding to actually pay me (hence the contracting).</p>
            <p>The biggest lesson so far: <b>speed {'>'} perfection</b>.</p>
            <p>Big Co tries to feel small (AKA fast and creative) and small companies try to feel big (AKA ordered and stable...or stable enough to keep you there). But startups, especially when they are early and struggling for talent, are begging to be led.</p>
            <p>
                <b>They <i>want</i> you to take initiate</b> and make suggestions.
                <br/>
                <b>They <i>want</i> you to deviate</b> from the wireframes by 5% if it's going to save you 50% of the time to get to market.
                <br/>
                <b>They <i>want</i> your input</b> on areas that may have nothing to with software. I double as a copywriter and email marketer (previous jobs) and will make candid suggestions about both.
            </p>
            <p>Getting your product out there for feedback is way, way better than coding for a year to craft a pixel-perfect, tested application that no one wants.</p>
            <p>If you're building MVP (and it's not B2B or you have thousands of customers banging down your door), then tech debt is okay. Just ship. Get out the door so you're not holding up sales and marketing. Don't worry about optimizing. Refactor only after you've actually proven the concept.</p>
            <p>In short, be a leader. Or at least think like one. That's what every organization wants.</p>
        </BlogContainer>
    )
}

export default StartupsVersus;