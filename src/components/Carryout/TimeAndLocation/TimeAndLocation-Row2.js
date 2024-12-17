import React, { useState } from "react";
import './TimeAndLocationRow2.css';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from "react-datepicker";

function TimeAndLocationRow2({ onNextClicked, onDateChange }) {
    const [pickUpDate, setPickUpDate] = useState();

    const handleDateChange = (date) => {
        setPickUpDate(date);
        onDateChange(date);
    }

    return (
        <div id="TimeAndLocationRow2">
            <div id="TimeAndLocationRow2-top-container">
                <CategoryDivider categoryName={"Choose Pickup Time"}/>
                <DatePicker 
                    id="TimeAndLocationRow2-TimePick"
                    selected={pickUpDate} 
                    onChange={(date) => { handleDateChange(date) }}
                    minTime={setHours(setMinutes(new Date(), 59), 7)}
                    maxTime={ssetHours(setMinutes(new Date(), 0), 22)}
                    showIcon
                    showTimeSelect
                    timeIntervals={15}
                    dateFormat="MMMM dd, yyyy @HH:mm"
                />
                <label className="warning-label">Open Hours: <br/>Mon. - Fri. 8am - 10pm <br/>Sat. Sun. 10am - 10pm</label>
                <CategoryDivider categoryName={"Choose Pickup Location"} />
            </div>
            <div id="TimeAndLocationRow2-bottom-container">
                <button onClick={onNextClicked} className="toNext-btn" id="timeAndLocationRow2-onNext-button">Next</button>
            </div>
        </div>
    )
}

export default TimeAndLocationRow2;

function CategoryDivider({categoryName}) {
    return (
        <div className="categoryDivider">
            <h1>{categoryName}</h1>
        </div>
    )
}
