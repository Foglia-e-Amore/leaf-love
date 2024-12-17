import React from "react";
import './Header.css'

function Header() {
    return(
        <div className="Header">
            <h1 className="header-title">Header Header</h1>
            <div className="Header-items">
                <a href="../leaf-love/#/aboutus">AboutUsPage</a>
                <a href="../leaf-love/#/menu">Menu</a>
                <a href="../leaf-love/#/">Reservations</a>
            </div>

        </div>
    )
}

export default Header;