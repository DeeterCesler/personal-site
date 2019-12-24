import React from "react";

const Allblogs = (props) => {
    console.log("Allblogs props.data: " + props.data.blogName)
    return(
        <div>
            {/* <div className="row">
                <div className="col-3 large-view block">
                    <div className="row">{props.data.blogName}</div>
                    <div className="row">{props.data.blogSummary}</div>
                    <div className="row">
                        <a href={props.data.blogPath}>{props.data.blogName}</a>
                        <Singleblog blog={props.data} loggedIn={props.loggedIn}/>
                    </div>
                </div>
            </div> */}
            {/* <div className="small-view"> */}
            <div className="col-md block">
                <a href={props.data.blogPath}>{props.data.blogName}</a>
            </div>
            {/* </div> */}
        </div>
    )
}

export default Allblogs;