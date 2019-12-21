import React from "react";
import { Button, Label, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Redirect } from "react-router-dom";
import Editblog from "./Editblog";

const backendURL = process.env.REACT_APP_BACKEND_SERVER_ADDRESS || "https://followup-v1.herokuapp.com/";

export default class Singleblog extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            modal: false,
            _id: this.props.blog._id
        }

        this.toggle = this.toggle.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
    }

    handleChange = (e) => {
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value
        });
    }

    editblog = async (e) => {
        console.log("EDITING", this.state)
        try{
            // e.preventDefault();
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

    deleteblog = async () => { // NOT FINSIHED
        try{
            console.log("attempting DELETE");
            await fetch(backendURL+"blog/delete", {
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

    toggleModal() {
        this.setState(prevState => ({
          modal: !prevState.modal
        }));
    }
    
    render(){
        const {redirect} = this.state;
        if(redirect){
            return <Redirect to="/blogs/all"/> 
        }
        return(
            <div>
                <div>
                    <Button color="info" className="view-button" onClick={this.toggleModal}>{this.props.blog.blogName}</Button>
                </div>
                <Modal isOpen={this.state.modal} toggle={this.toggleModal} className={this.props.className}>
                <ModalHeader toggle={this.toggleModal}>Modal title</ModalHeader>
                <ModalBody>
                    <h3>View blog</h3>
                        <br/>
                        <Label><strong>blog name:</strong></Label>
                        <p>{this.props.blog.blogName}</p>
                        <br/>
                        <Label><strong>blog email:</strong></Label>
                        <p>{this.props.blog.blogEmail}</p>
                        <br/>
                        <Label><strong>Info to know about them:</strong></Label>
                        <p>{this.props.blog.blogSummary}</p>
                        <br/>
                        <Label><strong>Time between reminders (in days):</strong></Label>
                        <p>{this.props.blog.repeatingReminderRhythm}</p>
                        <div className="mini-spacer"/>
                    </ModalBody>
                <ModalFooter>
                <Editblog deleteblog={this.props.deleteblog} blog={this.props.blog}/>
                <Button onClick={this.toggleModal}>Close</Button>
            </ModalFooter>
            </Modal>
        </div>
        )
    }
}