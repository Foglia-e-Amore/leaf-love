import React from "react";
import './Review-Row2.css';
import menuItems from "../../../Pages/Menu/menuItems";
import BigChickenMac from "../../../images/BigChickenMac.jpg";

function ReviewRow2() {
    const orderItems = menuItems.map((item) =>
        <Card
            key={item.id.toString()}
            name={item.name}
        />
    );

    return (
        <div id="ReviewRow2">
            {orderItems}
        </div>
    );
}

export default ReviewRow2;

function Card({image = BigChickenMac, name, price}) {
    return (
        <div id="ReviewCard">
            <img src={image} alt="name" id="reviewProductImage" />
            <p>{name}</p>
            <p>{price}</p>
        </div>
    )
}