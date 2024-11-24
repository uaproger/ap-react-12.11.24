import Input from "./Input.jsx";
import Button from "./Button.jsx";
import Menu from "./Menu/Menu.jsx";
import {useState} from "react";

const Form = () => {
    const [userName, setUserName] = useState("");

    const changeUserName = (event) => {
        setUserName(event.target.value);
    }

    const showUserName = (event) => {
        event.preventDefault();
        if (userName === "" || userName.length < 2) return;
        console.log("UserName: ", userName); // TODO: прибрати після дебагу
    }

    return (
        <form action={"/"} method={"post"} className={"form"}>
            <Input onChange={changeUserName} type={"text"} placeholder={"Ваше ім'я"} ariaLabel={"Ваше ім'я"} value={ userName } />
            <Button onClick={showUserName} text={"Start Order"} className={"btn"} />
            <Menu />
        </form>
    );
}

export default Form;
