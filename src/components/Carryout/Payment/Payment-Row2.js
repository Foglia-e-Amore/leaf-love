import React from "react";
import './Payment-Row2.css';
import { CreditCard, Lock, Today } from '@mui/icons-material';

function PaymentRow2() {
    return (
        <div id="Payment-row2">
            <div id="Payment-row2-top-container">
                <PaymentMethodCard
                    methodName={"Credit/Debit"}
                    isDefault={true}
                >
                    <h4>Card info</h4>
                    <div id="cardNumberInputField" className="row border-black">
                        <label for="cardNumber-input"><CreditCard /></label>
                        <input id="cardNumber-input" type="text" maxLength={16} autoComplete="cc-number" />
                    </div>
                    <div id="cardSecurityInputField" className="row border-black">
                        <label for="securityCodeInput"><Lock /></label>
                        <input id="securityCodeInput" type="text" maxLength={3} autoComplete="cc-csc" />
                        <span className="gap16" />
                    </div>
                    <span className="margin16"></span>
                    <div id="cardExpireDate-field" className="row border-black">
                        <label for="cardExpireDate-input"><Today /></label>
                        <input id="cardExpireDate-input" type="text" autoComplete="cc-exp" />
                    </div>
                    <h4>Address</h4>
                    <div id="addressInputs">

                    </div>
                </PaymentMethodCard>
            </div>
        </div>
    )
}

export default PaymentRow2;

function PaymentMethodCard({ methodName, isDefault, children }) {
    return (
        <div className="PaymentMethodCard">
            <div className="PaymentMethodCard-radio-btn">
                <input type="radio" name="method-name" value="card" checked={isDefault} />
                <h3>{methodName}</h3>
            </div>
            {children}
        </div>
    )
}