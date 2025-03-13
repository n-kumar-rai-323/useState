import {useEffect, useState} from "react";
const useDebounce=({value, delayInMs=1500})=>{

    const [debounceSearchTerm, setDebounceSearchTerm]= useState("");
    useEffect(() => {
        const timer = setTimeout(() => {
            setDebounceSearchTerm(value);

        }, delayInMs);
        return()=>clearTimeout(timer)
    },[value, delayInMs])
    return debounceSearchTerm;
}


export default useDebounce;