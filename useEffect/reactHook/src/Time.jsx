import { useEffect, useState } from "react";

const Time = () => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        setTimeout(() => {
            setCount((count) => count + 1)
        }, 1000)

    })
    return (
        <>
            <p>The Count is {count}</p>
        </>
    )

}
export default Time;