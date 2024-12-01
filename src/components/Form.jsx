import Input from "./Input.jsx";
import Button from "./Button.jsx";
import { useState } from "react";
import { useNavigate } from "react-router";

const Form = () => {
    const navigate = useNavigate();

    const [userName, setUserName] = useState("");

    const changeUserName = (event) => {
        setUserName(event.target.value);
    }

    const showUserName = (event) => {
        event.preventDefault();
        if (userName === "" || userName.length < 2) return;
        navigate("/menu");
    }

    return (
        <form action={"/"} method={"post"} className={"form"}>
            <Input onChange={ changeUserName } type={"text"} placeholder={"Ваше ім'я"} ariaLabel={"Ваше ім'я"} value={ userName } />
            <Button onClick={ showUserName } text={"Start Order"} className={"btn"} />
        </form>
    );
}

export default Form;
