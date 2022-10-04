import Scroller from "circle-scroll";
import './style.css'

const BlogContainer = (props) => {
    return <div className="home blog-container">
            <h1 className="header">{props.title}</h1>
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
                    <li><a href="/startups-vs-big-tech">Working at Big Tech vs. Startups</a></li>
                    <li><a target="_blank" rel="noreferrer" href="https://deetercesler.medium.com/you-know-more-than-you-think-bcea318b4d09">You Know More Than You Think</a></li>
                    <li><a target="_blank" rel="noreferrer" href="https://deetercesler.medium.com/the-ten-commandments-of-clean-code-89b22a6f01d1">The Ten Commandments of Clean Code</a></li>
                </ul>
                <div className="mini-spacer"/>
        </div>
}

export default BlogContainer;