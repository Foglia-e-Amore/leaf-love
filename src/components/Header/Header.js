import React from "react";
import './Header.css'

function Header() {
    return(
        <div className="Header">
            <h1 className="title">Header Header</h1>
            <div className="items">
                <a href="#/About Us">AboutusPage</a>
                <a href="#/menu">Menu</a>
                <a href="#/">Reservations</a>
            </div>

        </div>
    )
}

export default Header;