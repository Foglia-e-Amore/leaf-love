import React from "react";
import './Header.css'

function Header() {
    return(
        <div className="Header">
            <h1 className="title">Foglia e Amore</h1>
            <div className="items">
                <a href="#/About Us">About Us</a>
                <a href="#/menu">Menu</a>
                <a href="#">Reservations</a>
            </div>

        </div>
    )
}

export default Header;