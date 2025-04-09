import React from "react";
import Codeblock from "../../../components/Codeblock";
import BlogContainer from "../../../components/BlogContainer";
import PsychedelicBackground from "../../../components/PsychedelicBackground";

const ImmutabilityArticle = () => {
    return (
        <PsychedelicBackground>
            <BlogContainer title="Immutability in JavaScript: 3 Methods" host="Tensure.io" author="Deeter Cesler" publishedDate="October 12, 2021">
                <p>Immutability means something cannot be changed. You might want this to make sure you're preserving a value.</p>
                <p>For example, if you're having multiple functions input the same value, but the value can potentially change between the function's operations, you'll want to ensure the original value isn't accidentally getting overwritten somewhere in the process.</p>
                <h3>1. CONST</h3>
                <p>Most of the time, this is the start and end of immutability. It's lesson one for anyone learning ES6 JavaScript and onward.</p>
                <p>Using <code>const</code> lets you assign immutable primitive values. Declare a string, number, or boolean variable with <code>const</code> and it will never change.</p>
                <p>This is not the case with object literals. Using <code>const</code> for an object will still allow you to add or change keys and values within the object.</p>
                <p>Use <code>const</code> with primitive values for immutability. You'll need something else for objects. Arrow functions declared with <code>const</code> are also immutable. Declaring an arrow function with <code>let</code> allows it to be entirely overwritten.</p>
                
                <h3>2. OBJECT.FREEZE()</h3>
                <p><code>Object.freeze()</code> does what it sounds like—freezes an object literal and makes it truly immutable. Here's an example:</p>
                <Codeblock>
                    {`const obj = { key: 'value' };
Object.freeze(obj);
obj.key = 'newValue'; // This will not change the value
console.log(obj.key); // 'value'`}
                </Codeblock>
                <p>Once an object is frozen, it will not change. When you absolutely need an object literal to remain exactly how it is, use <code>Object.freeze()</code>.</p>
                <p>This also works on arrays in JavaScript.</p>
                <p>You might be thinking "everything is an object in JavaScript, including primitives. So does that mean it works on all? Sadly, no. For example, if you try to freeze a string set with normal <code>var</code> declaration, it won't affect mutability at all.</p>
                
                <h3>3. OBJECT.DEFINEPROPERTY()</h3>
                <p>Using <code>Object.defineProperty()</code>, you can determine mutability on a specific property within an object. While the rest of the values within the object are as mutable as ever, you can "lock" an object in.</p>
                <Codeblock>
                    {`const rabbits = { two: 2 };
Object.defineProperty(rabbits, 'two', { writable: false });
rabbits.two = 4; // This will not change the value`}
                </Codeblock>
                <p>The great thing about this kind of immutability is it's not permanent. Yes, okay, maybe that doesn't truly make it immutable. Nevertheless, it warrants being mentioned on this list.</p>
                <p>Making it writable again is the exact same process as before:</p>
                <Codeblock>
                    {`Object.defineProperty(rabbits, 'two', { writable: true });`}
                </Codeblock>
                <p>After changing the pair's <code>writable</code> status to <code>true</code>, it could again be manipulated as usual.</p>
                
                <h3>Bonus: PRIVATE KEYWORDS</h3>
                <p>Okay, this isn't a proper feature of JavaScript. It's been proposed but is not widely supported with JS engines. But it's still interesting, so I'll mention it. As a treat.</p>
                <p>Using <code>#</code> at the beginning of a named variable to make it the equivalent to the <code>private</code> keyword in Java classes.</p>
                <p>E.g. <code>#variableName</code> for a value or function declaration would only make that function accessible inside the class it's declared.</p>
                <p>This doesn't mean the field is legitimately immutable. It's only immutable in the sense that you won't be able to change or even access it outside of the class, even though you normally would be able to normally.</p>
                <p>This isn't truly immutable, but it's still a neat trick to make a field a bit less mutable. If you need to change or access a private field, that's when you reach back into OOP-land and rediscover getters and setters.</p>
                
                <p>— Deeter Cesler</p>
            </BlogContainer>
        </PsychedelicBackground>
    );
}

export default ImmutabilityArticle;
