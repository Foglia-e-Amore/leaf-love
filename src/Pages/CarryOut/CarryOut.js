import { useState, useEffect } from "react";
import './CarryOut.css';
import ReviewRow2 from "../../components/Carryout/Review/Review-Row2";
import TimeAndLocationRow2 from "../../components/Carryout/TimeAndLocation/TimeAndLocation-Row2";

function CarryOut() {
    const [progress, setProgress] = useState(33);
    const [carryoutStage, setCarryoutStage] = useState("Detail");
    const [cartItems, setCartItems] = useState([]);

    // Load cart items from local storage on component mount
    useEffect(() => {
        const storedCart = localStorage.getItem('cart');
        console.log(`storedCart: ${storedCart}`);
        if (storedCart !== null) {
            console.log("updated")
            setCartItems(JSON.parse(storedCart));
        }
    }, []);

    const addItem = (item) => {
        let nextId = 0;
        try {
            console.log(cartItems.length)
            nextId = cartItems.at(-1).keyId + 1;
        } catch (err) {
            console.log("cartItems = null");
            nextId = 0;
        }

        const toCart = { keyId: nextId, name: item.name + nextId };
        setCartItems([...cartItems, toCart]);
        console.log(cartItems.length);
        console.log(cartItems);
        localStorage.setItem('cart', JSON.stringify([...cartItems, toCart]));
    }

    return (
        <div id="CarryOut">
            <div id="CarryOut-row1">
                <h1 className="carryout-heading">{carryoutStage}</h1>
                <progress id="checkout-progress" value={progress} max={100} />
            </div>
            <div id="CarryOut-row2">
                {carryoutStage === "Detail" ? (
                    <TimeAndLocationRow2
                        onNextClicked={() => setCarryoutStage("Review")}
                        onDateChange={(date) => {console.log(date)}}
                    />
                ) : carryoutStage === "Review" ? (
                    <ReviewRow2
                    cartItems={cartItems}
                    onNextClick={() => addItem({name: "Burger"})}
                    />
                ): null}

            </div>
        </div>
    )
}

export default CarryOut;