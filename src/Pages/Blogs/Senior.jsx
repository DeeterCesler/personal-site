import React from 'react';
import BlogContainer from "../../components/BlogContainer";

const Senior = () => {
    return(
        <BlogContainer title="3 Ways a Senior Thinks">
            <p>A senior is supposed to know more than a junior—needing to look less up, a better intuition for effective solutions, and knows more nuance of tech.</p>
            <p>Everyone's aware of the expected technical <i>skill</i> difference. What's less discussed is the different ways a junior is supposed to <i>think</i>.</p>
            <h3>1. Don't make it harder than it has to be</h3>
            <p>This is broad (and that's on purpose). For example: why would you recreate a library when an external one works just fine? A junior (or newly-promoted senior) wants to validate their own skills. An experienced senior will take a sufficiently-proven pre-made library every time.</p>
            <p>On a more technical angle, you might remember this as the DRY principle. In the same you'll encapsulate and abstract away repeatable logic, do it again on the meta level and don't repeat something you can freely borrow from someone else.</p>
            <p>Ironically, insecurity about using something you yourself didn't make will make you appear <i>less</i> senior, not more. Meanwhile, the smartest thing you can do is not create unnecessary work for yourself.</p>
            <h2>2. Proliferating Knowledge and Ability</h2>
            <p>Let's say there's a critical feature on your team's app. You built it, or are the only one who knows how to maintain it. Great, you've got incredible job security, right?</p>
            <p>Yeah, you do. However, <i>half</i> of your role is now to make sure your team can manage it without you.</p>
            <p>Get familiar with <i>The Bus Test</i> (or the less morbid version, the <i>The Lottery Test</i>). If someone on your team got hit by a bus (or won the lottery and disappeared), is there any part of your infrastructure that relies on them? Any access keys in their hands only, or a piece of code only they understand?</p>
            <p>If that exists for ANYONE on the team, even just some helper utilities the junior built, make a plan to proliferate it. One day, someone is going to quit or move on, and they won't be interested in documenting their knowledge when that day comes.</p>
            <h3>3. Give your opinion boldly</h3>
            <p>Seniors are supposed to be domain expert. Typically you're not just a vague "senior" but a senior in something specific. Half of what you may speak on may not even be a specific technology, but maybe an approach, an architectural decision, or just a team practice.</p>
            <p>The entire point of senior culturally is <b>someone who can be trusted</b>. If you're trusted, then speak! It's not only encouraged, but a requirement of your title.</p>
            <p>You never need to put someone else down to give your opinion. Even if you don't like their ideas, there is never a need to be rude about it. Software development is a beautiful area of life where it really is about making a solid, logic-based argument for your interests. No one likes an asshole. The good news is you can be bold your entire life without being one.</p>
            <p>A senior leads by making things easier for the team, making the team better and more knowledgeable, and gives strong opinions when the time comes. Once you have the role, embody it well.</p>
        </BlogContainer>
    )
}

export default Senior;