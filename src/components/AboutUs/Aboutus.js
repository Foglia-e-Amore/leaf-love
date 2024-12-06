import React from "react";
import "./Aboutus.css"

function Aboutus({id, name, onClick}) {
    return(
        <div 
            className="Aboutus"
            onClick={() => onClick(id)}
        >
        </div>
    )
}

export default Aboutus;