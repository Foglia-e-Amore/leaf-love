import React from "react";
import './Homepage.css'
import cows from "../../images/cows.png";

function Homepage() {
    return(
    <div className="Homepage">
        <div className="firststuff"> 
            <img className = "mainimage" src={cows} alt = "cow ran away"/>
            <p1 className = "imgtext">Explore Our Menu</p1>
            <button className="imgbutton">
                <a className = "links" href="../leaf-love/#/menu">Menu</a>
            </button>
        </div>
    </div>
    )
}



export default Homepage;