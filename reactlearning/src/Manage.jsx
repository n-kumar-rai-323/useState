import { useState } from "react";

const Manage=()=>{
    const [items, setItems] = useState([])
    const addItem=()=>{
        setItems([...items,`Item ${items.length + 1}`])
    };
    const removeItem=()=>{
        setItems(items.slice(0, -1));
    }
    return (
        <>
     <div>
        <button onClick={addItem}>Add Item</button>
        <button onClick={removeItem}>Remove Item</button>

        <ul>
            {items.map((item, index)=>(
                <li key={index}>{item}</li>
            ))}
        </ul>
       
     </div>
        </>
    )
}

export default Manage;