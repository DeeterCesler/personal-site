import React, { useEffect } from "react";
import PsychedelicBackground from "../components/PsychedelicBackground";

const Blog = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return(
        <div className="home">
            <PsychedelicBackground>
                <div className="container" style={{maxWidth: '60%'}}>
                    <h1 className="header">BLOGS</h1>
                    <div className="mini-spacer"/>
                    <ul className="blog-list">
                        <li><a href="/senior">3 Ways a Senior Thinks</a></li>
                        <li><a href="/security">8 Security Principles EVERY Software Dev Should Know</a></li>
                        <li><a target="_blank" rel="noreferrer noopener" href="https://deetercesler.medium.com/the-ten-commandments-of-clean-code-89b22a6f01d1" style={{fontWeight: 'bold', color: '#ffd700'}}>⭐ The 10 Commandments of Clean Code ⭐</a><br/><span className="" style={{fontSize: '1rem', color: '#fff'}}>Selected by Medium's editors for <i>Programming</i> category</span></li>
                        <li><a href="/junior">6 Ways to De-Junior Your Code</a></li>
                        <li><a href="/startups-vs-big-tech">Working at Big Tech vs. Startups</a></li>
                        <li><a target="_blank" rel="noreferrer noopener" href="https://deetercesler.medium.com/you-know-more-than-you-think-bcea318b4d09">You Know More Than You Think</a></li>
                        <li><a target="_blank" rel="noreferrer noopener" href="https://deetercesler.medium.com/using-graphql-with-react-2778750a768d">Use GraphQL with React: So Easy, a Junior Dev Can Do It</a></li>
                    </ul>
                    <div className="mini-spacer"/>
                </div>
            </PsychedelicBackground>
        </div>
    )
}

export default Blog;