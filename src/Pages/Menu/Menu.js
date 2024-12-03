import { useState, useRef } from "react";
import './Menu.css'
import MenuCard from "../../components/MenuCard/MenuCard";
import menuItems from "./menuItems";
import BigChickenMac from "../../images/BigChickenMac.jpg";

function Menu () {
    const [isDialogShow, setIsDialogShow] = useState(false);
    const [dialogContents, setDialogContents] = useState(null);
    const dialogRef = useRef(null);
    
    const handleOpenDialog = (id) => {
        setIsDialogShow(true);
        
        let showingItem = menuItems.find(item => item.id === id);

        setDialogContents(showingItem);

        dialogRef.current.showModal();
    }

    const handleCloseDialog = () => {
        setIsDialogShow(false);
        dialogRef.current.close();
    }

    const MenuList = menuItems.map((item) =>
        <MenuCard 
            key={item.id.toString()} 
            id={item.id}
            name={item.name}
            onClick={() => handleOpenDialog(item.id)}
        />
    )

    return(
        <div className="Menu">
            <div className="Menu-items">
                {MenuList}
            </div>
            <dialog id="menu-dialog" ref={dialogRef} open={isDialogShow} style={{ display: isDialogShow ? 'block' : 'none' }}>
                <button onClick={handleCloseDialog} id="dialog-close-button">close</button>
                <div id="dialog-contents">
                    <img id="dialog-image" src={BigChickenMac} />
                    <div id="dialog-content-column-2" className="transformX-18vw">
                        <h1>{dialogContents?.name}</h1>
                    </div>
                </div>
            </dialog>
        </div>
    )
}

export default Menu;