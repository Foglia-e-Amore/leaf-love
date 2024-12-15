import { useEffect, useState } from "react";
import './Review-Row2.css';
import menuItems from "../../../Pages/Menu/menuItems";
import BigChickenMac from "../../../images/BigChickenMac.jpg";

function ReviewRow2({ cartItems, onNextClick }) {
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
            <button id="toPayment-btn" onClick={onNextClick}>Checkout</button>
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