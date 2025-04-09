import React from "react";
import BlogContainer from "../../../components/BlogContainer";
import PsychedelicBackground from "../../../components/PsychedelicBackground";

const LoopingArticle = () => {
    return (
        <PsychedelicBackground>
            <BlogContainer title="Everything You Need to Know About Looping in JavaScript" host="Tensure.io" author="Deeter Cesler" publishedDate="October 5, 2021">
                <p>Looping is one of the first things you learn as a programmer. It's not just "for" and "while" loops. You've got more options for looping than you'll probably want to know about.</p>
                <p>Let's take a look.</p>

                <h3>FOR</h3>
                <p>The classic. Old faithful. If you're already familiar, feel free to skip ahead.</p>
                <p>The basic for-loop's structure is simple. Repeat a certain amount of code until a condition is met. For a for-loop, that condition is having to run a specific number of times (unless the code itself is designed to exit the loop prematurely).</p>
                <p>There are three statements you pass in to a for-loop: the starting point, the end point (exit condition), and the rate at which the loop is going from the start to the end point.</p>

                <h4>First statement</h4>
                <p>In 99% of cases, the starting point will look like <code>i = 0</code>. Why <code>i</code>? That's just what everyone uses. It's like coding slang. Not a requirement, but it's familiar. It's supposed to stand for "integer" since that's what you're incrementing.</p>
                <p>Why 0? Because arrays are zero-indexed in JavaScript, which means the first value in the array is found at position 0, not 1.</p>

                <h4>Second statement</h4>
                <p>The second statement, <code>i &lt; arr.length</code> means the loop will continue until the value of <code>i</code> is greater than the length of <code>arr</code> which is the array which was declared before the loop.</p>
                <p>The statement is checked before the loop runs. If <code>i</code> is greater, the code block won't run and your loop closes.</p>

                <h4>Third statement</h4>
                <p>The third part, <code>i++</code> is shorthand for <code>i += 1</code> which is shorthand itself for <code>i = i + 1</code>. All it means is you're iterating <code>i</code> by 1. So before the first loop, <code>i</code> is equal to 0. Before the second loop, it's equal to 1.</p>
                <p>The third statement runs after your code block has executed.</p>

                <p>Put it all together, and our example shows us the for-loop will loop 5 times before moving on.</p>

                <h3>FOR…IN</h3>
                <p>In plain English, this form of looping lets you loop through an object.</p>
                <p>To be more precise, I'll borrow the definition from Mozilla's web docs: "The <code>for…in</code> statement iterates over all enumerable properties of an object that are keyed by strings (ignoring ones keyed by Symbols)."</p>

                <h3>FOR…OF</h3>
                <p>This syntax looks the same as <code>for…in</code> except it works for arrays and strings.</p>

                <h3>WHILE</h3>
                <p>A while-loop is one that re-executes a code block over and over until the exit criteria is met. It's like a for-loop, except only the third statement.</p>
                <p>Let's say you're trying to create a program to gamble on blackjack. As long as the cash you have is above zero, you want to run the <code>playHand()</code> function.</p>

                <h3>DO…WHILE</h3>
                <p>Similar to a <code>while</code> loop, except you're guaranteeing the function will run at least once. Instead of the exit criteria being checked before the loop is entered, like on a normal <code>while</code> loop, it's checked at the end.</p>

                <h3>FOREACH()</h3>
                <p>The method <code>forEach()</code> is applied to arrays. It loops through the array as expected and executes a block of code during each iteration.</p>

                <h3>MAP()</h3>
                <p>Another method, <code>map()</code> (not to be confused with <code>Map</code> object), looks and works a lot like <code>forEach()</code> except you're actually making an entirely new array.</p>

                <h3>BONUS: FILTER()</h3>
                <p>While it can be used to iterate through an array, <code>filter()</code> is kind of in the gray zone. Here, you're not looping in order to do something to each of the values, nor are you performing an action based on how many times you loop.</p>
                <p>Instead, <code>filter()</code> is returning a subset of the array you're passing in based on criteria. Hence the name "filter."</p>

                <h3>LAST WORD</h3>
                <p>Of course, there are many more clever tricks you can use to iterate, manipulate, and search through arrays (e.g. <code>reduce()</code>, <code>values()</code>, <code>Object.keys()</code>, <code>find()</code>) but they all require a bit more complexity than you typically need.</p>
                <p>The loops and methods here are your fundamentals, and will likely make up 99% of all the looping you'll do.</p>
            </BlogContainer>
        </PsychedelicBackground>
    );
}

export default LoopingArticle;
