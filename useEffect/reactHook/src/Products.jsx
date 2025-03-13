import { instance2 } from "./utils/axios2";
import { useEffect, useState } from "react";

const Products = () => {
    const [products, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errMsg, setErrMsg] = useState("");
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                setErrMsg("");
                const { data } = await instance2.get("/products");
                console.log({ data });
                setProduct(data.products);
            } catch (error) {
                setErrMsg(error.message || "An error occurred while fetching data.");
            }finally{
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    if(loading){
        return <>Data is Loading...</>;
    }
    if(errMsg){
        return <>{errMsg}</>;
    }
    return (
        <>
       {products && products.length > 0 ? (
                <ol>
                    {products.map((product) => (
                        <li key={product.id}>
                            <strong>{product.title}</strong>
                            <p>{product.description}</p>
                            <div>
                            <strong>Category :</strong>
                                {product.category}
                            </div>
                            <div>
                            <strong>Image :</strong><br/>
                                <img src={product.images} width={400}></img>
                            </div>
                           
                        </li>
                    ))}
                </ol>
            ) : (
                <p>No products available.</p>
            )}
        </>
    )
}
export default Products;