import React from "react";

const Blog = () => {
    return(
        <div className="home">
            <div className="container" style={{maxWidth: '60%'}}>
                <h1 className="header">BLOGS</h1>
                <div className="mini-spacer"/>
                <ul className="blog-list">
                    <li><a href="/senior"><b>NEW: </b>3 Ways a Senior Thinks</a></li>
                    <li><a href="/security">8 Security Principles EVERY Software Dev Should Know</a></li>
                    <li><a href="/junior">6 Ways to De-Junior Your Code</a></li>
                    <li><a href="/startups-vs-big-tech">Working at Big Tech vs. Startups</a></li>
                    <li><a target="_blank" rel="noreferrer noopener" href="https://deetercesler.medium.com/you-know-more-than-you-think-bcea318b4d09">You Know More Than You Think</a></li>
                    <li><a target="_blank" rel="noreferrer noopener" href="https://deetercesler.medium.com/the-ten-commandments-of-clean-code-89b22a6f01d1">The 10 Commandments of Clean Code</a></li>
                    <li><a target="_blank" rel="noreferrer noopener" href="https://deetercesler.medium.com/using-graphql-with-react-2778750a768d">Use GraphQL with React: So Easy, a Junior Dev Can Do It</a></li>
                    <li><a target="_blank" rel="noreferrer noopener" href="https://tensure.io/bootstrap-vs-flexbox-vs-css-grid/">Bootstrap vs Flexbox vs CSS Grid</a></li>
                    <li><a target="_blank" rel="noreferrer noopener" href="https://tensure.io/use-tdd-for-faster-development/">Use TDD for Faster Development</a></li>
                    <li><a target="_blank" rel="noreferrer noopener" href="https://tensure.io/intro-to-behavior-driven-development/">What is BDD? Intro to Behavior-Driven Development</a></li>
                    <li><a target="_blank" rel="noreferrer noopener" href="https://tensure.io/looping-in-javascript/">Everything You Need to Know about Looping in JavaScript</a></li>
                    <li><a target="_blank" rel="noreferrer noopener" href="https://tensure.io/immutability-in-javascript/">Immutability in JavaScript: 3 Methods</a></li>
                </ul>
                <div className="mini-spacer"/>
            </div>
        </div>
    )
}

export default Blog;