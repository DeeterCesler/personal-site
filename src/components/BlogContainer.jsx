import React from 'react';
import Scroller from "circle-scroll";
import './style.css'

const BlogContainer = (props) => {
    return <main className="home blog-container">
            <h1 className="header">{props.title}</h1>
            {props.host && <span className="author"><i>Originally hosted on {props.host}</i></span>}
            <br/>
            {props.publishedDate && <span className="published-date"><i>Published: {props.publishedDate}</i></span>}
                <div className="mini-spacer"/>
                <Scroller link="/blog">
                    <div className="blog-text">
                        {props.children}
                    </div>
                </Scroller>
                <div style={{backgroundColor: 'white', width: '100%', height: '2px'}} />
                <div className="mini-spacer"/>
                <h2>Other Blogs</h2>
                <br/>
                <ul className="other">
                    <li><a href="/security">8 Security Principles EVERY Software Dev Should Know</a></li>
                    <li><a href="/junior">6 Ways to De-Junior Your Code</a></li>
                    <li><a href="/startups-vs-big-tech">Working at Big Tech vs. Startups</a></li>
                </ul>
                <div className="mini-spacer"/>
        </main>
}

export default BlogContainer;