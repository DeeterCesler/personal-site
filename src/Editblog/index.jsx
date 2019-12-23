import React from "react";
import { Form, Input, Button, Label, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Redirect } from "react-router-dom";

const backendURL = process.env.REACT_APP_BACKEND_SERVER_ADDRESS || "https://followup-v1.herokuapp.com/";

export default class Editblog extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            blogName: this.props.blog.blogName,
            blogSummary: this.props.blog.blogSummary,
            body: this.props.blog.body,
            dropdownOpen: false,
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
                <Button color="primary" onClick={this.toggleModal}>Edit "{this.props.blog.blogName}"</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggleModal} className={this.props.className}>
                <Form onSubmit={this.editblog}>
                    <ModalHeader toggle={this.toggleModal}><h3>edit blog</h3></ModalHeader>
                    <ModalBody>
                        <br/>
                        <Label>blog name:</Label>
                        <Input onChange={this.handleChange} type="text" name="blogName" defaultValue={this.props.blog.blogName}/>
                        <br/>
                        <Label>Summary:</Label>
                        <Input onChange={this.handleChange} type="text" name="blogSummary" defaultValue={this.props.blog.blogSummary}/>
                        <br/>
                        <Label>Body:</Label>
                        <Input onChange={this.handleChange} type="textarea" name="body" defaultValue={this.props.blog.body}/>
                        <br/>
                        <div className="mini-spacer"/>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" type="submit">Submit changes</Button>
                    </ModalFooter>
                </Form>
                <ModalFooter>
                    <Form onSubmit={this.props.deleteblog}>
                        <Button className="delete-left" color="danger" type="submit">Delete "{this.props.blog.blogName}"</Button>
                    </Form>
                    <Button onClick={this.toggleModal}>Cancel & Close</Button>
                </ModalFooter>
            </Modal>
        </div>
        )
    }
}