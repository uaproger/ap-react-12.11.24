import Version from "./Version.jsx";
import Input from "./Input.jsx";
import { NavLink } from "react-router";
import { useContext } from "react";
import { UserContext } from "../contexts/UserProvider.jsx";

const Header = () => {

    const { userName } = useContext(UserContext);

    return (
        <header>
            <div className={"logo"}>
                <NavLink to={"/"} className={"header-link"} >PIZZA DAY</NavLink>
                <NavLink to={"/menu"} className={"header-link"} >MENU</NavLink>
                <NavLink to={"/cart"} className={"header-link"} >CART</NavLink>
                <NavLink to={"/orders/1"} className={"header-link"} >ORDERS</NavLink>
            </div>
            <Input type={"text"} className={"search-bar"} placeholder={"Search for the order #"} />
            <div className={"username"} >{userName.toUpperCase()}</div>
            <Version />
        </header>
    );
};

export default Header;
