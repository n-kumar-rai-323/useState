import { useCallback, useState, memo} from "react";

const Callback =()=>{
    console.log("Parent");
    const [count, setCount] = useState(0);
    const [sample, setSample]= useState([])

    const handleClick =()=>{
        setCount(count + 1);
    }

    const addSample = useCallback(()=>{
        setSample((prev)=>[...prev, "new sample"]);
    }, []);


    return (
        <>
        <div>
            <h1>Parent: {count}</h1>
            <button onClick={handleClick}>Increment</button>
            <ChildComp sample={sample} addSample={addSample}/>
        </div>
        </>
    )
}


const ChildComp =memo(({sample, addSample})=>{
    console.log("Child Comp")
    return(
        <>
        {sample.toString()}
        <button onClick={addSample}>Increase Sample</button>
        </>
    )
});

export default Callback;