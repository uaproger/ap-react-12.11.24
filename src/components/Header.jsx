import Version from "./Version.jsx";
import Button from "./Button.jsx";
import Input from "./Input.jsx";

const Header = ({ cart }) => {
    const { changeShowCart } = cart;
    return (
        <header>
            <div className={"logo"}>PIZZA DAY</div>
            <Input type={"text"} className={"search-bar"} placeholder={"Search for the order #"} />
            <div onClick={ changeShowCart } className={"username"} style={ {cursor: "pointer"} } title={"Cart"}>ALEXPROGER</div>
            <Version />
        </header>
    );
};

export default Header;
