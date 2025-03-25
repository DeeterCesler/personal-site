import React from "react";
import PsychedelicBackground from "../../components/PsychedelicBackground";
import "./style.css";

const NotFound = () => {
    return(
        <PsychedelicBackground>
            <div className="now">
                <div className="container" style={{display: "flex", justifyContent: "center", alignItems: "center", paddingTop: "150px"}}>
                    <div className="spacer"/>
                    <div className="main">
                    <h1 className="header">WHOOPS</h1>
                    <h3 className="bold">YOU GOT LOST</h3>
                    <br/>
                    <p className="">or the link you found was old</p>
                    <p className="small">it happens to everyone</p>
                    <p className="lost bold"><a href="/" className="">go back</a></p>
                    </div>
                    <div className="spacer"/>
                </div>
            </div>
        </PsychedelicBackground>
    )
}

export default NotFound;
