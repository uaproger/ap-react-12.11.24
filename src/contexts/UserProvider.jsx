import {createContext, useEffect, useState} from "react";
import {api} from "../config/api.js";
import {getCookie} from "../helpers/helper.js";

export const UserContext = createContext(null);
UserContext.displayName = "UserProvider";

const UserProvider = ({ children }) => {
    const [userName, setUserName] = useState("");

    useEffect(() => {
        const getUser = async () => {
            try {
                const res = await fetch(api.users + '?token=' + getCookie("token"));

                if (!res.ok) {
                    throw new Error(`Помилка HTTP! статус: ${res.status}`);
                }

                const data = await res.json();

                setUserName(data[0].name);
            } catch (error) {
                console.error("Помилка отримання користувача: ", error);
            }
        }

        getUser();
    })

    return <UserContext.Provider value={{ userName, setUserName }}>{ children }</UserContext.Provider>;
}

export default UserProvider;
