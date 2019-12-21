import React from "react";
import { Form, Button } from "reactstrap";
import Editblog from "../../Editblog";
import Singleblog from "../../Singleblog";

const backendURL = process.env.REACT_APP_BACKEND_SERVER_ADDRESS || "https://followup-v1.herokuapp.com/";

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
                    <div className="col-lg">{props.data.blogEmail}</div>
                    <div className="col-sm">{props.data.blogSummary}</div>
                    <div className="col-md">
                        <Editblog blog={props.data}/>
                    </div>
                    <div className="col-sm">
                        <Form onSubmit={deleteblog}>
                            <Button type="submit">Delete "{props.data.blogName}"</Button>
                        </Form>
                    </div>
                </div>
            </div>
            <div className="small-view">
                <Singleblog deleteblog={deleteblog} blog={props.data}/>
            </div>
        </div>
    )
}

export default Allblogs;