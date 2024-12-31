import React from "react";
import logo from "../../images/foglialogo.png";
import './Header.css'

function Header() {
    return(
        <div className="Header">
            <div className="logoandtitle">
                <a href="../leaf-love/#/" ><img className = "header-logo" src={logo} alt = "cow ran away"/></a>
                <a href="../leaf-love/#/"  className= "headername">Foglia e Amore</a>
            </div>
            <div className="Header-items">
                <a className = "header-link" href="../leaf-love/#/aboutus">About Us</a>
                <a className = "header-link" href="../leaf-love/#/menu">Menu</a>
                <a id = "lastlink" className = "header-link" href="../leaf-love/#/carryout">Reservations</a>
            </div>

        </div>
    )
}

export default Header;