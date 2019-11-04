import React from "react";
import { Form, Button } from "reactstrap";
import EditContact from "../../EditContact";

const backendURL = process.env.REACT_APP_BACKEND_SERVER_ADDRESS || "https://followup-v1.herokuapp.com/";

const AllContacts = (props) => {

    const deleteContact = async () => {
        try{
            console.log("DELETE");
            // console.log(this.props.data._id);
            const pull = await fetch(backendURL+"contact/" + props.data._id, {
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
        <tr className="row contacts-row">
            <td className="col">{props.data.contactName}</td>
            <td className="col">{props.data.contactEmail}</td>
            <td className="col">{props.data.contactSummary}</td>
            <td className="col">
                <EditContact contact={props.data}/>
            </td>
            <td className="col">
                <Form onSubmit={deleteContact}>
                    <Button type="submit">Delete "{props.data.contactName}"</Button>
                </Form>
            </td>
        </tr>
    )
}

export default AllContacts;