import React from "react";
import { Form, Input, Button } from "reactstrap";
import { Redirect } from "react-router-dom";

const backendURL = process.env.REACT_APP_BACKEND_SERVER_ADDRESS

export default class Newblog extends React.Component{
    constructor(props){
        super();
        this.toggle = this.toggle.bind(this);
        this.state = {
            blogName: "",
            blogSummary: "",
            blogPath: "",
            body: "",
            dropdownOpen: false,
            redirect: false,
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value
        });
    }

    postNewblog = async (e) => {
        e.preventDefault();
        try{
            console.log("POSTING")
            const pull = await fetch(backendURL + "blog/new", {
              method: "POST",
              body: JSON.stringify(this.state),
              headers: {
                'Content-Type': 'application/json',
                "Authorization": localStorage.getItem("token")
              } 
            });
            const parsedPull = await pull.json();
            console.log("information got", parsedPull)
            this.setState({
                redirect: true
            })
        } catch(err){
            console.log("error:", err);
        }
    };

    deleteblog = async () => { // NOT FINSIHED
        try{
            console.log("attempting DELETE");
            await fetch(backendURL + "blog/delete", {
                method: "POST",
            })
        }catch(err){
            console.log("error: ", err);
        }
    }

    toggle() {
        this.setState({
          dropdownOpen: !this.state.dropdownOpen
        });
      }

    render(){
        return(
            this.state.redirect || this.props.loggedIn === false
            ?
            <div>
                {alert("Logged in status: " + this.props.loggedIn)}
                <Redirect to="/blog"/>
            </div>
            :
            <div className="background">
                {console.log("Logged in status: " + this.props.loggedIn)}
                <div className="spacer"></div>
                <h3>add a new blog</h3>
                <Form className="explainer" onSubmit={this.postNewblog}>
                    <Input onChange={this.handleChange} type="text" name="blogName" placeholder="blog name..."/>
                    <Input onChange={this.handleChange} type="text" name="blogPath" placeholder="blog URL path (e.g. /test)"/>
                    <Input onChange={this.handleChange} type="text" name="blogSummary" placeholder="6-word summary here"/>
                    <Input onChange={this.handleChange} type="textarea" height="800" name="body" placeholder="actual blog here"/>
                    <div className="mini-spacer"/>
                    <br/>
                    <Button type="submit">Submit</Button>
                </Form>
                <div className="spacer"/>
            </div>
        )
    }
}