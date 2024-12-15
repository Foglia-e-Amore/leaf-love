import { useEffect, useState } from "react";

function Play() {
    const [testStoredItem, setTestStoredItem] = useState("");

    useEffect(() => {
        const storedItem = localStorage.getItem("testStored");

        setTestStoredItem(storedItem);
    }, [])

    const replaceItem = (newItem) => {
        setTestStoredItem(newItem);
        localStorage.setItem("testStored", newItem);
    }

    return(
        <>
            <h1>Stored items</h1>
            <p>{testStoredItem}</p>
            <button onClick={() => {replaceItem("test-2")}}>Replac item</button>
        </>
    )
}

export default Play;