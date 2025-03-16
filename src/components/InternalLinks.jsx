import { Link } from "react-router-dom";

const InternalLinks = () => {
    return (
        <div className="links">
            <p className="link-p"><Link className="link" style= {{ textDecoration: "none" }} to="/now">NOW</Link></p>
            <p className="link-p"><Link className="link" style= {{ textDecoration: "none" }} to="/work">WORK</Link></p>
            <p className="link-p"><Link className="link" style= {{ textDecoration: "none" }} to="/blog">BLOG</Link></p>
        </div>
    )
}

export default InternalLinks;
