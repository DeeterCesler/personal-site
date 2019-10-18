import React from "react";

const Portfolio = () => {
    return(
        <div className="portfolio container">
            <h2>Portfolio</h2>
            <div className="mini-spacer"/>
            <div className="row">
                <div className="col-sm gray-boi">
                    <h4>Item one</h4>
                    <p>It was good.</p>
                </div>
                <div className="col-sm gray-boi">
                    <h4>Item two</h4>
                    <p>It was shite.</p>
                </div>
                <div className="col-md gray-boi">
                    <h4>Item three</h4>
                    <p>It was made up, but I'm putting it on here to fill space.</p>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;