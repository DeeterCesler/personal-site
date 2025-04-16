import React from "react";
import BlogContainer from "../../../components/BlogContainer";
import PsychedelicBackground from "../../../components/PsychedelicBackground";

const TDDArticle = () => {
    return (
        <PsychedelicBackground>
            <BlogContainer title="Use TDD for Faster Development" host="Tensure.io" author="Deeter Cesler" publishedDate="July 22, 2021" shortRef="tdd">
                <p>Every engineer <em>knows</em> they should be adding tests to their work, but most of us, it's one of those things that gets "cut for time."</p>
                <p>If you're on any sort of deadline (which, yeah) then this pressure is totally understandable. You don't get more points from the customer for writing tests to make sure something works. They only care if it works!</p>
                <p>The usual argument says adding tests is a way to prevent future problems. Spot on. However, there's another reason you should be writing tests that pay off now instead of in the future.</p>
                <p>Writing tests before you start helps you work faster than writing no tests at all.</p>

                <h3>What is Test-Driven Development?</h3>
                <p>Test-driven development, or TDD, is the process of writing a series of tests for your code to pass before you've even written the code.</p>
                <p>It goes like this:</p>
                <ol>
                    <li>Write out tests your code needs to pass</li>
                    <li>Code your function/page/API</li>
                    <li>Test</li>
                    <li>If it passes, move on; if not, go back a step</li>
                    <li>Then, look at your next test</li>
                    <li>Add or alter your code to accommodate it (if it doesn't pass already)</li>
                    <li>Test again</li>
                    <li>Repeat until all tests pass</li>
                </ol>
                <p>In contrast, here's the "process" that most of us follow if left to our own devices:</p>
                <ol>
                    <li>Build a function</li>
                    <li>Run your program</li>
                    <li>Does it work? Cool. Maybe you try it a few more times, throw in a null value or something as a kind of "QA-lite." But it's not a standard, it's more of "oh yeah, let's add that."</li>
                    <li>Ship it.</li>
                </ol>
                <p>At a glance, the first path looks more tedious. Why do 8 steps when you can do 4? That's just common sense!</p>
                <p>However, while it looks like the TDD path takes more time than business-as-usual, it's generally the opposite. TDD gives you clarity in your direction, a way to measure success, and a final, "shippable" point (the passing of all predefined tests) that prevents scope creep.</p>

                <h3>An Example? Sure.</h3>
                <p>You are developing an API. Your API will be a GET request taking in a user's ID and authentication token and will return the 10 latest photos from their profile. It will also record the time and date of the request to a database.</p>
                <p>Right off the bat, there are a handful of error conditions I can think of:</p>
                <ul>
                    <li>Request is made without user ID</li>
                    <li>Request is made without authentication token</li>
                    <li>Request is made with the wrong auth token</li>
                    <li>The request is fine, but the photos can't be found (DB error)</li>
                    <li>The request and retrieval work, but there was an error writing the event to your query-history DB</li>
                    <li>The user doesn't have 10 photos to retrieve</li>
                </ul>
                <p>These are fairly obvious needs to handle, yet if one doesn't take the time to write them out ahead of time, it would be incredibly easy to overlook these in your development process. This is a problem because your QA or PM will catch these and send your work back to you. It will take twice as long to "fix" the problem than it will be to develop it in a test-driven manner from the get-go.</p>

                <h3>How to Make Friends and Influence (QA) People</h3>
                <p>If you have a QA team, ask them for the 10 most common checks they typically apply to your code (or your team's code). Write tests for the checks (or get close).</p>
                <p>Better yet, ask them for the 10 most common errors they find in pre-shipped code. Write tests for those, and become their favorite engineer. Now that you're their favorite engineer, you may find that your code gets priority when there are eight different PRs out for them to review because they know yours will be the least headache.</p>

                <h3>Be a Team Player</h3>
                <p>Create a basic template for you and your team to use, a simple file you can copy and paste and run your code through. For every new function, page, endpoints, etc. you now have a rough set of criteria it needs to pass in order to even get a PR made (based on what you learned from your QA folks). This doesn't have to be a hard-and-fast rule, just something to serve your team in the process of development.</p>
                <p>If your team doesn't have a culture of testing, you may find it hard to make that shift. A framework like TDD makes their work faster and easier, and it's hard to say no to that.</p>

                <h3>What If My Team Doesn't Have QA or Coding Standards?</h3>
                <p>Then it's time to create some. Start now, even if it means starting badly. Or contract a QA for a month to look over your shoulder, learn your product, and ask the insightful questions you're missing, then translate those questions into tests so you can make TDD a part of your workflow.</p>

                <h3>The Last Word</h3>
                <p>TDD is like sharpening the saw. It may not seem "productive," so you may have a mental block about making time for it, but it absolutely makes up for the up-front cost by increasing your rate of productivity.</p>
            </BlogContainer>
        </PsychedelicBackground>
    );
}

export default TDDArticle;
