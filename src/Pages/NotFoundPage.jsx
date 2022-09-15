import React from "react";

const NotFoundPage = () => {
    return(
        <div className="now">
            <div className="container">
                <div className="spacer"/>
                <h1 className="header">WHOOPS</h1>
                <div className="spacer"/>
                <div className="">
                    <div className="main">
                        <h3 className="bold">YOU GOT LOST</h3>
                        <br/>
                        <p className="">or the link you found was old</p>
                        <p className="small">it happens to everyone</p>
                        <p className="lost tiny"><a href="/" className="">go back home</a></p>
                    </div>
                </div>
                <div className="spacer"/>
                <div className="spacer"/>
            </div>
        </div>
    )
}

export default NotFoundPage;