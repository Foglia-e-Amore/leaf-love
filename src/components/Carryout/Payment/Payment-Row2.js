import React from "react";
import './Payment-Row2.css';

function PaymentRow2() {
    return (
        <div id="Payment-row2">
            <div id="Payment-row2-top-container">
                <PaymentMethodCard
                    methodName={"Credit/Debit"}
                />
            </div>
        </div>
    )
}

export default PaymentRow2;

function PaymentMethodCard({methodName}) {
    return (
        <div className="PaymentMethodCard">
            <div className="PaymentMethodCard-btn-name">
                <input type="radio" name="method-name" />
                <h3>{methodName}</h3>
            </div>
        </div>
    )
}