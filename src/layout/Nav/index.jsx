import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import './style.css'

const Nav = () => {
    const [show, setShow] = useState(false)
    const [notHome, setNotHome] = useState(false)
    const location = useLocation()

    const toggleModal = (e) => {
        if(e.target === e.currentTarget) setShow(!show)
    }

    useEffect(() => {
        setNotHome(location.pathname !== '/' && 
                  location.pathname !== '/index' && 
                  location.pathname !== '/index.html');
    }, [location.pathname]);

    const Contact = () => {
        return(
            <div onClick={(e)=>toggleModal(e)} className="contact modal-shadow">
                <div className="modal-outline">
                    <button onClick={toggleModal}/>
                    <h2 className="contact-header">contact</h2>
                    <br/>
                    <div className="insta">
                        email: <br/>
                        <strong><a className="" href="mailto:deeter.cesler@gmail.com">deeter.cesler@gmail.com</a></strong>
                    </div>
                    <div className="insta">
                        insta: <br/>
                        <strong><a href="https://www.instagram.com/deetercesler/" target="_blank" rel="noopener noreferrer">
                            @deetercesler
                        </a></strong>
                    </div>
                    <div className="insta">
                        twitter: <br/>
                        <strong><a href="https://www.twitter.com/deetercesler/" target="_blank" rel="noopener noreferrer">
                            @deetercesler
                        </a></strong>
                    </div>
                    <div className="insta">
                        linkedin: <br/>
                        <strong><a href="https://www.linkedin.com/in/deetercesler/" target="_blank" rel="noopener noreferrer">
                            deetercesler
                        </a></strong>
                    </div>
                </div>
            </div>
        )
    }

    return(
        <div className="top-nav">
            {notHome && <div className="contact">
                <a href="/" className="" style={{textDecoration: "none"}}>
                    <button className="neumorphism-button">Back</button>
                </a>
            </div>}
            <div className="glow" />
            {show ? <Contact />
            : <button data-bs-toggle="modal" onClick={toggleModal} className="neumorphism-button">Contact</button>
            }
        </div>
    )
}

export default Nav;