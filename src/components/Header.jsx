import Version from "./Version.jsx";
import Input from "./Input.jsx";
import { NavLink } from "react-router";
import { useContext } from "react";
import { useUser } from "../contexts/UserProvider.jsx";

const Header = () => {
    const { userName } = useUser();

    return (
        <header>
            <div className={"logo"}>
                <NavLink to={"/"} className={"header-link"} >PIZZA DAY</NavLink>
            </div>
            <Input type={"text"} className={"search-bar"} placeholder={"Search for the order #"} />
            <div className={"username"} >{userName.toUpperCase()}</div>
            <Version />
        </header>
    );
};

export default Header;
