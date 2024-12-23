import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../config/api.js";
import { getCookie } from "../helpers/helper.js";
import useFetch from "../hooks/useFetch.jsx";

const UserContext = createContext(null);
UserContext.displayName = "UserProvider";

export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
}

const UserProvider = ({ children }) => {
    const [userName, setUserName] = useState("");

    const { data, error } = useFetch(api.users + '?token=' + getCookie("token"));
    useEffect(() => {
        if (data && data[0] && data[0].name) {
            setUserName(data[0].name);
        }
    }, [data]);

    if (error) {
        console.error(error);
    }

    return <UserContext.Provider value={{ userName, setUserName }}>{ children }</UserContext.Provider>;
}

export default UserProvider;
