import React from "react";
import PostPreview from "./PostPreview";

const Blog = () => {
    return(
        <div className="blog-wrapper">
            <div className="mini-spacer"/>
            <div className="fader">
            <br/>
            <br/>
            <br/>
            <PostPreview/>
            <PostPreview/>
            <PostPreview/>
            <PostPreview/>
            </div>
        </div>
    )
}

export default Blog;