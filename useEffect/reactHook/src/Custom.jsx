
import { useState } from "react";
import useDebounce from "./hooks/useDebounce";
import useApi from "./hooks/useApi";

const Custom = () => {
    const [tempSearch, setTempSearch] = useState("");
    const debounceSearchTem = useDebounce({ value: tempSearch })
    const { loading, errMsg, products } = useApi({
        url:`/products/search?q=${debounceSearchTem}`,
    })




    return (
        <div>
            <input
                type="text"
                onChange={(e) => setTempSearch(e.target.value)}
                placeholder="Search any food recipes..."
            />
            {loading && <p>Loading...</p>}
            {errMsg && <p style={{ color: "red" }}>{errMsg}</p>}
            <ul>
                {products.map((product) => (
                    <li key={product.id}>{product.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default Custom;
