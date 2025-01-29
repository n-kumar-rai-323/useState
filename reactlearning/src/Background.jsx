import { useState } from "react";

const Background = () => {
    const [isColor, setColor] = useState(()=>{''})
    const bgColor=()=>{
        const colors = ["red", "blue", "green", "yellow"];
        const randomColor = colors[Math.floor(Math.random()* colors.length)];
       setColor(randomColor)
    }
    return (
        <>
            <h1 style={{backgroundColor:isColor}}>Background Change</h1>

            <div style={{backgroundColor:isColor}}>
                <button onClick={bgColor}>Change Background Color</button>
            </div>
        </>
    )
}

export default Background;