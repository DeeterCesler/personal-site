import React from "react";
import Singleblog from "../../Singleblog";

const backendURL = process.env.REACT_APP_BACKEND_SERVER_ADDRESS;

const Allblogs = (props) => {

    const deleteblog = async () => {
        try{
            console.log("DELETE");
            // console.log(this.props.data._id);
            const pull = await fetch(backendURL+"blog/" + props.data._id, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                "authorization": localStorage.getItem("token")
            } 
            });
            const parsedPull = await pull.json();
            return parsedPull
        } catch(err){
            console.log("error:", err);
        }
    }

    return(
        <div>
            <div className="large-view">
                <div className="row blogs-row large-view">
                    <div className="col-lg">{props.data.blogName}</div>
                    <div className="col-sm">{props.data.blogSummary}</div>
                    <div className="col-md">
                        <Singleblog deleteblog={deleteblog} blog={props.data} loggedIn={props.loggedIn}/>
                    </div>
                </div>
            </div>
            <div className="small-view">
                <Singleblog deleteblog={deleteblog} blog={props.data} loggedIn={props.loggedIn}/>
            </div>
        </div>
    )
}

export default Allblogs;