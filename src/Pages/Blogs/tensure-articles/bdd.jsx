import React from "react";
import Codeblock from "../../../components/Codeblock";
import BlogContainer from "../../../components/BlogContainer";
import PsychedelicBackground from "../../../components/PsychedelicBackground";

const BddArticle = () => {
    return (
        <PsychedelicBackground>
            <BlogContainer title="What is BDD? Intro to Behavior-Driven Development" host="Tensure.io" author="Deeter Cesler" publishedDate="August 3, 2021" shortRef="bdd">
                <p>If adding tests to your code is an afterthought for most developers, creating test automation is an after-afterthought. Nevertheless, test automation is necessary once a code repo gets so large that QA can't keep up with regular manual tests, or when you have to be absolutely certain there aren't any critical bugs introduced with new merges (especially when you have lots of different teams working in the same repo).</p>
                
                <p>There are many types of test automation you can add at this stage, but today I want to highlight my favorite: behavior-driven development.</p>
                
                <p>Behavior-driven development (BDD) is all about writing tests from the user's perspective. It's the more "human" version of test automation. With BDD, you're running through UI tests to simulate how a user interacts with your product, but you're not testing secondary metrics like status codes, cloud build speeds, or memory leaks.</p>
                
                <h3>BDD ≠ TDD</h3>
                <p>The name looks like test-driven development (TDD) but don't get them confused. TDD is writing tests for the developer to keep their work on-spec, focused, and efficient. In contrast, BDD is more focused on quality assurance, especially in an automated test environment.</p>
                
                <p>BDD tests are usually written in a style called "gherkin." Gherkin looks like plain English, and is comprised of:</p>
                <ul>
                    <li>Test Steps in plain English</li>
                    <li>Step Definitions translating the English into code (with step Runners encompassing which methods are run as part of the step)</li>
                    <li>Methods executed by the step definitions</li>
                </ul>
                <p>(Some test developers like to add in a fourth step between Step Definitions and Execution called "runners," a semantic distinction that adds another layer of abstraction. I personally see it as a bit redundant, which is why I include it as part of "step definitions." This is one of those holy wars between developers about which way is best, but it honestly doesn't really matter.)</p>
                
                <h3>Example of a BDD test</h3>
                <p>BDD tests follow a simple pattern:</p>
                <p><strong>GIVEN ______</strong></p>
                <p><strong>WHEN ______</strong></p>
                <p><strong>THEN  ______</strong></p>
                <p>For example:</p>
                <Codeblock>
                    {`GIVEN I log in as a standard user
WHEN I navigate to the Dashboard page
THEN the page loads without errors`}
                </Codeblock>
                <p>Let's say your test is a little more complicated. That's when the AND statements come in. They can fit after any of the steps above. The only place they can't go is before the GIVEN.</p>
                <Codeblock>
                    {`GIVEN I log in as a standard user
WHEN I navigate to the Dashboard page
AND I try to access a premium feature
THEN I receive a prompt asking me to upgrade my subscription`}
                </Codeblock>
                <p>As a rule, GIVEN is about initial context, WHEN is about the actions the user takes, and THEN is the testable result. The THEN step needs to be falsifiable, because that's how you'll know whether or not your test passed or failed.</p>
                
                <p>Candidly, the GIVEN and WHEN statements and their differences can get a little confusing. Why not say "AND I navigate to the Dashboard page" and then "WHEN I try to access a premium feature"? Good question, and I don't have a great answer. What matters most is that your team sets up a common standard. A shared, sensible standard on your team matters more than following a universal code style guide that doesn't make sense in your specific context.</p>
                
                <h3>Benefits of BDD</h3>
                <p>BDD is human-readable. Writing the top-level in plain English means you don't need to be a programmer to understand what a test is doing. The nice thing is being able to add in specific terms, like passing an argument into a parameter. This is especially useful when you add a new extension to an old feature.</p>
                
                <p>BDD is reusable. If you're writing two very similar test steps, it's easy to refactor into one step to save time. For example, say you have a navigation bar on your product's home page. The current tabs are Home, Pricing, and About, and you're adding a new Dashboard option on the tab that shows up if a user is logged in. If you already have a test step that says "And I navigate to the \`____\` tab" where you fill in the blank with either Home, Pricing, or About, because your step is looking for a link with that term within your nav bar, then you don't need to add any more work. You're following the DRY principle.</p>
                
                <p>BDD is written from the perspective of the user. From a business standpoint, this means you're approaching the problem (and the test) with the user's experience in mind.</p>
                
                <h3>Gherkin ≠ BDD (but it might as well be)</h3>
                <p>This part confused me longer than I want to admit, so I want to make sure you understand it up front: Gherkin is not the same as BDD. Gherkin is a language used for BDD.</p>
                
                <p>Gherkin is the part of BDD that lets you write "code" in plain English. It's not code executing the verification itself.</p>
                
                <p>Gherkin allows you to write any words you want. They don't have to be in a certain order, or spelled right, or even in English. There are some rules to Gherkin, but that's out of scope for this short article. For now, just know that it's (loosely) a language, it's the top-level human-readable form of the test, and it's inextricable from BDD.</p>
                
                <h3>Last Word</h3>
                <p>If you're an early-stage startup, BDD probably isn't for you (yet).</p>
                
                <p>But, if you're working on a large, enterprise SaaS product, you probably need this yesterday.</p>
                
                <p>Start thinking from your user's perspective, make life easier for your QAs, and make sure your giant SaaS product is as stable as it can reasonably be -- and do it all with BDD.</p>
            </BlogContainer>
        </PsychedelicBackground>
    );
}

export default BddArticle;
