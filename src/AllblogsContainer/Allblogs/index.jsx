import React from "react";
import Singleblog from "../../Singleblog";

const Allblogs = (props) => {
    console.log("Allblogs props.data: " + props.data.blogName)
    return(
        <div>
            <div className="large-view">
                <div className="row blogs-row large-view">
                    <div className="col-lg">{props.data.blogName}</div>
                    <div className="col-sm">{props.data.blogSummary}</div>
                    <div className="col-md">
                        <a href={props.data.blogPath}>{props.data.blogName}</a>
                        {/* <Singleblog blog={props.data} loggedIn={props.loggedIn}/> */}
                    </div>
                </div>
            </div>
            <div className="small-view">
            <div className="col-md">
                        <a href={props.data.blogPath}>{props.data.blogName}</a>
                    </div>
            </div>
        </div>
    )
}

export default Allblogs;