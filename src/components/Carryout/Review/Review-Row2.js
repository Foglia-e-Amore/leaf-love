import { useEffect, useState } from "react";
import './Review-Row2.css';
import menuItems from "../../../Pages/Menu/menuItems";
import BigChickenMac from "../../../images/BigChickenMac.jpg";

function ReviewRow2() {
    const [orderItems, setOrderItems] = useState([]);

    useEffect(() => {
        const carryoutUrl = window.location.href.split("carryout?")[1];
        const params = new URLSearchParams(carryoutUrl);
        const ids = params.getAll('id');
        console.log(ids);
        
        const filteredOrderItems = menuItems.filter(item => ids.map(Number).includes(item.id));

        console.log(filteredOrderItems[0]);
        setOrderItems(filteredOrderItems);
    }, []);

    return (
        <div id="ReviewRow2">
            {orderItems.map((item) => (
                <Card
                    key={item.id.toString()}
                    name = {item.name}
                />
            ))}
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