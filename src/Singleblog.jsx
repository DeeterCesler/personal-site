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
                <ModalHeader toggle={this.toggleModal}>{this.props.blog.blogName}</ModalHeader>
                <ModalBody>
                        <br/>
                        <Label><strong>{this.props.blog.blogName}</strong></Label>
                        <p>{this.props.blog.body}</p>
                        <br/>
                        <div className="mini-spacer"/>
                    </ModalBody>
                <ModalFooter>
                    { this.props.loggedIn 
                    ? 
                    <Editblog deleteblog={this.props.deleteblog} blog={this.props.blog}/>
                    :
                    <div/>
                    }
                <Button onClick={this.toggleModal}>Close</Button>
            </ModalFooter>
            </Modal>
        </div>
        )
    }
}