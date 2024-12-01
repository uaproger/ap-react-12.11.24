import Version from "./Version.jsx";
import Input from "./Input.jsx";
import { NavLink } from "react-router";

const Header = () => {
    return (
        <header>
            <div className={"logo"}>
                <NavLink to={"/"} className={"header-link"} >PIZZA DAY</NavLink>
                <NavLink to={"/menu"} className={"header-link"} >MENU</NavLink>
                <NavLink to={"/cart"} className={"header-link"} >CART</NavLink>
            </div>
            <Input type={"text"} className={"search-bar"} placeholder={"Search for the order #"} />
            <div className={"username"} >ALEXPROGER</div>
            <Version />
        </header>
    );
};

export default Header;
