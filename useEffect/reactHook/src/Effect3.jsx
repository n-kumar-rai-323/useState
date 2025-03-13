import { useEffect, useState } from "react";
import { instance } from "./utils/axios";

const Effect3 = () => {
    
    const [search, setSearch] = useState("");
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errMsg, setErrMsg] = useState("");

    useEffect(() => {
        const controller = new AbortController();
        // if (!search) {
        //     setProducts([]);
        //     return;
        // }

        const fetchData = async () => {
            try {
                setLoading(true);
                setErrMsg("");
                const { data } = await instance.get(`/products/search?q=${search}`, {
                    signal: controller.signal
                });
                setProducts(data.products);
            } catch (error) {
                setErrMsg(error.message || "An error occurred while fetching data.");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
        return () => controller.abort()
    }, [search]);

    return (
        <div>
            <input
                type="text"
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search any food recipes..."
            />
            {loading && <p>Loading...</p>}
            {/* {errMsg && <p style={{ color: "red" }}>{errMsg}</p>} */}
            <ul>
                {products.map((product) => (
                    <li key={product.id}>{product.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default Effect3;
