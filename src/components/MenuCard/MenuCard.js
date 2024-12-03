import React from "react";
import "./MenuCard.css"
import bigMc from "../../images/BigChickenMac.jpg";

function MenuCard({id, name, onClick}) {
    return(
        <div 
            className="MenuCard"
            onClick={() => onClick(id)}
        >
            <img id="menu-card-image" src={bigMc} />
            <p className="menu-name">{name}</p>
        </div>
    )
}

export default MenuCard;