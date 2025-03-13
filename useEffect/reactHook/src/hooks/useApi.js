import { instance } from "../utils/axios";
import { useEffect, useState } from "react";
const useApi = ({url}) => {
   
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errMsg, setErrMsg] = useState(null);




        const fetchData = async () => {
            try {
                setLoading(true);
                setErrMsg("");
                const { data } = await instance.get(url, {
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
    }, [url]);
    return { products, loading, errMsg }

}
export default useApi;