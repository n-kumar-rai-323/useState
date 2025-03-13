import { instance } from "./utils/axios";
import { useEffect, useState } from "react";

const Effect2 = () => {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errMsg, setErrMsg] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                setErrMsg("");
                const { data } = await instance.get("/recipes");
                // console.log({ data });
                setRecipes(data.recipes);
            } catch (error) {
                setErrMsg(error.message || "An error occurred while fetching data.");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <>Data is Loading...</>;
    }

    if (errMsg) {
        return <>{errMsg}</>;
    }

    return (
        <>
            {recipes.length > 0 ? (
                <ol>
                    {recipes.map((recipe) => (
                        <li key={recipe.id || recipe.name}>
                            <strong>{recipe?.name}</strong>
                            {recipe.instructions && recipe.instructions.length > 0 && (
                                <ul>
                                    {recipe.instructions.map((ins, index) => (
                                        <li key={index}>{ins}</li>
                                    ))}
                                </ul>
                            )}
                          <div>
                          <strong>Prepar Times: </strong> {recipe.prepTimeMinutes}
                          </div>
                                
                            <div>
                            <img src= {recipe.image} width={400}></img>
                            </div>
                            
                           <div>
                            <strong>Rating</strong>
                           {recipe.rating}
                           </div>
                            
                            
                        </li>
                    ))}
                </ol>
            ) : (
                <>Recipes not found!!</>
            )}
        </>
    );
};

export default Effect2;
