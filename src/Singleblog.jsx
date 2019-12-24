import React from "react";
import { Redirect } from "react-router-dom";
import Editblog from "./Editblog";
import {withRouter} from "react-router-dom";

const backendURL = process.env.REACT_APP_BACKEND_SERVER_ADDRESS

class Singleblog extends React.Component{
    constructor(props){
        super(props);
        this.routeParam = props.match.params.blog;
        this.state = {
            blog: {
                blogName: "",
                blogSummary: "",
                body: ""
            },
            redirect: false
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

    deleteblog = async (e) => {
        e.preventDefault();
        try{
            console.log("DELETING " + this.state.blog.blogName);
            alert("DELETING " + this.state.blog.blogName);
            const pull = await fetch(backendURL+"blog/" + this.state.blog.blogName, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                "authorization": localStorage.getItem("token")
            } 
            });
            console.log("DELETE STATUS: " + await pull.json())
            this.setState({
                redirect: true
            })
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
            this.state.redirect
            ?
            <Redirect to="/blog"/>
            :
            <div className="single-blog-background">
                <div className="spacer"/>
                <h1>{this.state.blog.blogName}</h1>
                <h4>{this.state.blog.blogSummary}</h4>
                <div>
                    <br/>
                    <br/>
                    <br/>
                    <p className="blog-body">{this.state.blog.body}</p>
                    <br/>
                    <div className="mini-spacer"/>
                    </div>
                <div>
                    { this.props.loggedIn 
                    ? 
                    <div>
                        <Editblog deleteblog={this.deleteblog} blog={this.state.blog}/>
                        <br/>
                        <br/>
                        <br/>
                    </div>
                    :
                    <div></div>
                    }
            </div>
        </div>
        )
    }
}

export default withRouter(Singleblog);