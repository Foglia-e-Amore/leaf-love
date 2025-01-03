import { useEffect, useState } from "react";
import './Review-Row2.css';
import menuItems from "../../../Pages/Menu/menuItems";
import BigChickenMac from "../../../images/BigChickenMac.jpg";

function ReviewRow2({ cartItems, onNextClick, totalPrice=0.00 }) {
    const [orderItems, setOrderItems] = useState([]);

    return (
        <div id="ReviewRow2">
            <div id="ReviewRow2-top">
                <h2 className="carryout-heading2">Your Order</h2>

                {cartItems.map((item) => (
                    <Card
                        key={item.keyId}
                        name={item.name}
                    />
                ))}
            </div>
            <div id="ReviewRow2-bottom">
                <div id="ReviewRow2-total-container">
                <p className="review-row2-heading2">Total</p>
                <p className="reviewRow2-Bold">${totalPrice}</p>
                </div>
                <button className="toNext-btn" onClick={onNextClick}>Checkout</button>
            </div>
        </div>
    );
}

export default ReviewRow2;

function Card({ image = BigChickenMac, name, price }) {
    return (
        <div id="ReviewCard">
            <img src={image} alt="name" id="reviewProductImage" />
            <p>{name}</p>
            <p>{price}</p>
        </div>
    )
}