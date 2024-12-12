import {useState, useEffect} from "react";
import './CarryOut.css';
import ReviewRow2 from "../../components/Carryout/Review/Review-Row2";

function CarryOut() {
    const[progress, setProgress] = useState(33);
    
    return (
        <div id="CarryOut">
            <div id="CarryOut-row1">
                <h1 className="carryout-heading">Review</h1>
                <progress id="checkout-progress" value={progress} max={100}>32%</progress>
            </div>
            <div id="CarryOut-row2">
                <div id="CarryOut-row2-top">
                    <h2 className="carryout-heading2">Your Order</h2>
                    <ReviewRow2 />
                </div>
                <button id="toPayment-btn" onClick={console.log("checkoutClicked")}>Checkout</button>
            </div>
        </div>
    )
}

export default CarryOut;