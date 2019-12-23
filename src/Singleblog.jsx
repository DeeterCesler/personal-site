import React from "react";
import { Button, Label, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Redirect } from "react-router-dom";
import Editblog from "./Editblog";
import {withRouter} from "react-router-dom";

const backendURL = process.env.REACT_APP_BACKEND_SERVER_ADDRESS || "https://followup-v1.herokuapp.com/";

class Singleblog extends React.Component{
    constructor(props){
        super(props);
        this.routeParam = props.match.params.blog;
        this.state = {
            blog: {}
        }
    }

    getBlog = async () => {
        try{
            console.log("TRYING TO GET THIS BLOG")
            console.log("ROUTE PARAM: " + this.routeParam)
            const foundBlog = await fetch(backendURL + "blog/" + this.routeParam)
            const parsedBlog = await foundBlog.json();
            console.log("FOUND BLOG: " + parsedBlog)
            this.setState({ 
                // info: blog.data,
                loaded: true,
                blog: parsedBlog.data
            });
            return parsedBlog
        } catch(err){
            console.log("whoops lol")
            console.log("error:", err);
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value
        });
    }

    editblog = async (e) => {
        console.log("EDITING", this.state)
        try{
            setTimeout(()=> console.log("waiting"), 5000)
            console.log("EDITING", this.state)
            const pull = await fetch(backendURL+"blog/" + this.state._id + "/edit", {
              method: "PUT",
              body: JSON.stringify(this.state),
              headers: {
                'Content-Type': 'application/json',
                "Authorization": localStorage.getItem("token")
              }
            });
            const parsedPull = await pull.json();
            console.log("information got", parsedPull)
            this.setState({
                redirect: false
            })
            return parsedPull
        } catch(err){
            console.log("error:", err);
        }
    };

    deleteblog = async () => {
        try{
            console.log("DELETE");
            const pull = await fetch(backendURL+"blog/" + this.state.blog._id, {
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

    componentDidMount = () => {
        console.log("BLOG SHIT " + this.routeParam)
        this.getBlog();
        console.log("SHIT " + this.state.blog.data)
    }
    
    render(){
        return(
            <div className="background">
                <div className="spacer"/>
                <h1>{this.state.blog.blogName}</h1>
                <h4>{this.state.blog.blogSummary}</h4>
                <div>
                    <br/>
                    <br/>
                    <br/>
                    <p>{this.state.blog.body}</p>
                    <br/>
                    <div className="mini-spacer"/>
                    </div>
                <div>
                    { this.props.loggedIn 
                    ? 
                    <Editblog deleteblog={this.state.deleteblog} blog={this.state.blog}/>
                    :
                    <div></div>
                    }
            </div>
        </div>
        )
    }
}

export default withRouter(Singleblog);