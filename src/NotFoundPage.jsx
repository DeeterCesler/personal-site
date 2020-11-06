import React from "react";

const NotFoundPage = () => {
    return(
        <div className="lost container">
            <div className="spacer" />
            <h2>Whoops!</h2>
            <div className="mini-spacer"/>
            <div className="row">
                <div className="col-sm readability">
                    <br/>
                    <h4>Looks like you're lost.</h4>
                    <br/>
                    <p>This isn't a real page. <br/>Maybe it used to be a blog, but now it's gone.</p>
                    <br/>
                    <a href="/">Home.</a>
                    <br/>
                </div>
            </div>
        </div>
    )
}

export default NotFoundPage;