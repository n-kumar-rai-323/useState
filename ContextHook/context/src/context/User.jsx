import { createContext, useEffect, useContext, useState } from "react";
import useApi from "../hooks/useApi";

const UserContext = createContext(null);

const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState({});

    const changeEmail = () => {
        setUser((prev) => {
            return { ...prev, email: "infonkumarrai323@gmail.com" };
        });
    };

    const { data } = useApi({ url: 'https://dummyjson.com/users/1' })
    console.log(data)

    useEffect(() => {
        if (data) { // ✅ Check if data is available before accessing properties
            const { firstName, lastName, email } = data;
            setUser({
                name: `${firstName} ${lastName}`,
                email,
            });
        }
    }, [data]);
    return (
        <UserContext.Provider value={{ user, setUser, changeEmail }}>
            {children}
        </UserContext.Provider>
    );
};
export default UserContextProvider;



export const useUserContextHook = () => {
    const userData = useContext(UserContext);
    if (userData === null) {
        throw new Error("User Context is used outside boundary");
    }
    return userData;
};