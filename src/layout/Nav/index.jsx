import React, { useState } from "react";
import home from './img/home.jpg'
import './style.css'

const Nav = () => {
    const [show, setShow] = useState(false)

    const toggleModal = (e) => {
        if(e.target === e.currentTarget) {
            console.log('flip it')
            console.log(show)
            setShow(!show)
        }
    }

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
                </div>
            </div>
        )
    }
    

    return(
        <div className="top-nav">
            <div className="logo">
                <a href="/">
                    <img src={home} alt="home" />
                </a>
            </div>
            <div className="glow" />
            {show ? <Contact />
            : <button data-bs-target="#exampleModal" data-bs-toggle="modal" onClick={toggleModal} className="neumorphism-button">Contact</button>
            }
        </div>
    )
}

export default Nav;