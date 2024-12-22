import React, { useState, useEffect } from "react";
import './TimeAndLocationRow2.css';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from "react-datepicker";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";


function TimeAndLocationRow2({ onNextClicked, onDateChange }) {
    const isDateWeekend = (date) => {
        const dayNum = date.getDay();
        console.log(dayNum);
        if(dayNum == 0 || dayNum == 6) {
            return true;
        } else {
            return false;
        }
    }

    const [pickUpDate, setPickUpDate] = useState(setHours(setMinutes(new Date(), 0), 8),);
    const [isWeekend, setIsWeekend] = useState(isDateWeekend(new Date()));
    const [openTime, setOpenTime] = useState(setHours(setMinutes(new Date(), 59), 7));
    const [closeTime, setCloseTime] = useState(setHours(setMinutes(new Date(), 0), 22));

    useEffect(() => {
        if(isWeekend) {
            setOpenTime(setHours(setMinutes(new Date(), 59), 9));
        } else {
            setOpenTime(setHours(setMinutes(new Date(), 59), 7));
        }
    }, [isWeekend])

    const handleDateChange = (date) => {
        setPickUpDate(date);
        onDateChange(date);
        setIsWeekend(isDateWeekend(date));
    }

    return (
        <div id="TimeAndLocationRow2">
            <div id="TimeAndLocationRow2-top-container">
                <CategoryDivider categoryName={"Choose Pickup Time"} />
                <DatePicker
                    id="TimeAndLocationRow2-TimePick"
                    selected={pickUpDate}
                    onChange={(date) => { handleDateChange(date) }}
                    minTime={openTime}
                    maxTime={closeTime}
                    showIcon
                    showTimeSelect
                    timeIntervals={15}
                    dateFormat="MMMM dd, yyyy @HH:mm aa"
                />
                <label className="warning-label">Open Hours: <br />Mon. - Fri. 8am - 10pm <br />Sat. Sun. 10am - 10pm</label>
                <CategoryDivider categoryName={"Choose Pickup Location"} />
                <p>{isWeekend.toString()}</p>
            </div>
            <div id="TimeAndLocationRow2-bottom-container">
                <button onClick={onNextClicked} className="toNext-btn" id="timeAndLocationRow2-onNext-button">Next</button>
            </div>
        </div>
    )
}

export default TimeAndLocationRow2;

function CategoryDivider({ categoryName }) {
    return (
        <div className="categoryDivider">
            <h1>{categoryName}</h1>
        </div>
    )
}
