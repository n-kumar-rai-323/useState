import { instance } from "../utils/axios";
import { useEffect, useState } from "react";

const useApi = ({ url }) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [errMsg, setErrMsg] = useState(null);

    useEffect(() => {
        const controller = new AbortController();

        const fetchData = async () => {
            try {
                setLoading(true);
                setErrMsg("");
                const { data } = await instance.get(url, {
                    signal: controller.signal
                });

                setData(data); // ✅ Fixed: Correctly assigning API response
            } catch (error) {
                setErrMsg(error.message || "An error occurred while fetching data.");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
        return () => controller.abort();
    }, [url]);

    return { data, loading, errMsg };
};

export default useApi;
