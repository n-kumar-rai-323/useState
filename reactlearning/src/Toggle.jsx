import { useState } from "react"

const Toggle=()=>{
    const [istoggle, setToggle]= useState(true)
    const toggle = ()=> setToggle(!istoggle);
 
    return (
        <>
        <div>
            <p>{istoggle ? 'The button is ON' : 'The button is OFF'}</p>
            <button onClick={toggle}>Toggle</button>
        </div>
        </>
    )
}

export default Toggle;