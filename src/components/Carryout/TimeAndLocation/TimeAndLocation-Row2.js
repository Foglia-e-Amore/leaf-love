import React from "react";
import './TimeAndLocationRow2.css';

function TimeAndLocationRow2({onNextClicked}) {
    return (
        <div id="TimeAndLocationRow2">
            <div id="TimeAndLocationRow2-top-container">
                <p>Location & Time ROW2</p>

            </div>
            <div id="TimeAndLocationRow2-bottom-container">
                <button onClick={onNextClicked} className="toNext-btn" id="timeAndLocationRow2-onNext-button">Next</button>
            </div>
        </div>
    )
}

export default TimeAndLocationRow2;