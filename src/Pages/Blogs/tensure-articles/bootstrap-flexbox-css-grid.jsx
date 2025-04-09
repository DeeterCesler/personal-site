import React from "react";
import BlogContainer from "../../../components/BlogContainer";
import PsychedelicBackground from "../../../components/PsychedelicBackground";

const LayoutManagementArticle = () => {
    return (
        <PsychedelicBackground>
            <BlogContainer title="Managing Frontend Layouts: Bootstrap vs Flexbox vs CSS Grid" host="Tensure.io" author="Deeter Cesler" publishedDate="August 16, 2021">
                <p>The most commonly-mentioned tools I come across when it comes to managing front end layouts are Bootstrap, flexbox, and CSS grid. They all have their place, and generally go from simplest implementation to more complex.</p>
                
                <h3>Bootstrap</h3>
                <p>Developed and later open-sourced by a developer at Twitter, Bootstrap is an all-in-one styling framework that makes adding CSS a simple and abstracted process.</p>
                <p>Bootstrap works by assigning rows and columns as classes to elements. A huge plus for me has been using the special types of column assignments. For instance, if you assign a set of elements with a class of <code>col-md</code> instead of just <code>col</code>, elements display as normal side-by-side columns on desktop. However, when viewing the page on mobile (smaller than a <code>md</code> or medium-sized screen), the columns stack automatically for optimized mobile viewing.</p>
                <p>This is incredibly useful for quick iteration of a design. In the early stages of developing a product, you don't care about load speed or efficiency as much as actually delivering the thing. Bootstrap is great for getting your work viewable quickly.</p>
                <p>I love Bootstrap. It's my go-to when I need some quick-and-dirty styling. However, I find myself often only using it for aligning columns and pages.</p>
                <p>If your goal is to get something simple up quickly, and you don't need to optimize for speed or efficiency, Bootstrap is a good bet. However, if you're only looking to manage the layout of a page and you care about optimization, it probably shouldn't be your go-to.</p>
                
                <h3>Flexbox</h3>
                <p>Flexbox is a part of CSS; it's a set of properties you can access within an element when the parent element's <code>display</code> is set to <code>flex</code>. It's the more <em>flexible</em> descendant of the older <code>inline</code> and <code>inline-block</code> display options.</p>
                <p>It's always been a pain when I'm trying to go between block, inline, and inline-block just to line up some dang <code>div</code> elements that won't just go there. Early on, I would cheat and use <code>position: absolute</code> if I got frustrated enough. With the extreme variation screen sizes have today, Flexbox is a much better option, and absolutely the easiest way to order elements within a container.</p>
                <p>Space child elements with <code>justify-content: center</code> or <code>justify-content: space-evenly</code> to the parent container.</p>
                <p>Set the child <code>div</code> or other element to a percentage width the standard way, and you've achieved the same effect as Bootstrap's <code>col</code> without having to import an entire library.</p>
                <p>Instead of messing with margin and padding tweaks, you can use the <code>align-content</code> property and its different options to get exactly the spacing and centering you want.</p>
                <p>There are lots of simple but incredibly useful properties of flexbox that come together to make it the last styling property you need for precise layout design. You may need to play with the <code>@media</code> at-rule to make sure you're optimizing as well for different screen sizes, but overall, you get a lot of functional solutions right out of the box.</p>
                
                <h3>CSS Grid</h3>
                <p>CSS Grid is the most complicated and most precise option for CSS layout management.</p>
                <p>The premise is simple: assign an element a <code>display</code> property of <code>grid</code> (or <code>inline-grid</code>) and you divide that element into a grid. Parameters like <code>grid-template-columns</code> and <code>grid-template-rows</code> are set explicitly in the grid. You set the number of rows in columns by setting their explicit heights and widths. You set the number of rows implicitly by setting their heights explicitly.</p>
                <p>This lets you get incredibly precise from the get-go, but that's assuming you know exactly what you want.</p>
                <p>It's exactly what you want if you're showing a lot of information on the screen at once and highly value visual organization. And there are some workarounds to the rigidity (like using percentages instead of pixel values). If you're trying to build a dashboard, you'll probably need CSS Grid. It's more work up front, but if you're trying to build something complicated, you'll need to use styling properties that can handle it.</p>
                
                <h3>Last Word</h3>
                <p>If you're like me, and you skip to the end to read the results, here you go:</p>
                <ul>
                    <li>Bootstrap is great for getting simple work up quickly.</li>
                    <li>Flexbox is solid for organizing container content and is the perfect middle ground between simple and robust.</li>
                    <li>CSS Grid is the last layout organization you'll ever need. It's exactly as precise as you'll need it to be, but it requires more forethought and precision from the get-go.</li>
                </ul>
                <p>Now, go off and make beautiful things.</p>
            </BlogContainer>
        </PsychedelicBackground>
    );
}

export default LayoutManagementArticle;
