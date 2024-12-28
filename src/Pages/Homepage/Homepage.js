import React from "react";
import './Homepage.css'
import cows from "../../images/cows.png";

function Homepage() {
    return(
    <div className="Homepage">
        <div className="firststuff"> 
            <img className = "mainimage" src={cows} alt = "cow ran away"/>
            <p1 className = "imgtext">moo moo lil nigga</p1>
        </div>
    </div>
    )
}

export default Homepage;