import React from "react";

const Contact = () => {
    return(
        <div className="contact container">
            <h2 className="contact-header">contact me</h2>
            <div className="row">
                <div className="col"/>
                <br/>
                <div className="insta col-md">
                    <strong><a className="email" href="mailto:deeter.cesler@gmail.com">deeter.cesler@gmail.com</a></strong>
                    <p className="small">I always respond to email.</p>
                </div>
                <div className="insta col-md">
                    <a href="https://www.instagram.com/deetercesler/" target="_blank" rel="noopener noreferrer">
                        <img className="insta-logo" src={require("./img/insta.png")} height="50px" alt="Instagram"/>
                    </a>
                    <p className="tiny">But I love the validation of social media.</p>
                </div>
                <div className="col"/>
            </div>
        </div>
    )
}

export default Contact;