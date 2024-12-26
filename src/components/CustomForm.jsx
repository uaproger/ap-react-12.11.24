import Input from "./Input.jsx";
import Button from "./Button.jsx";
import { useContext } from "react";
import { useNavigate } from "react-router";
import { useUser } from "../contexts/UserProvider.jsx";
import { api } from "../config/api.js";
import { GUID, setCookie } from "../helpers/helper.js";
import Form from "./Form.jsx";

const CustomForm = () => {
    const navigate = useNavigate();

    const { userName, setUserName } = useUser();

    const changeUserName = (event) => {
        setUserName(event.target.value);
    }

    const showUserName = async (event) => {
        event.preventDefault();
        if (userName === "" || userName.length < 2) return;
        try {
            const token = GUID();

            const response = await fetch(api.users, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: userName,
                    token: token
                }),
            });

            if (!response.ok) {
                throw new Error(`Помилка HTTP! статус: ${response.status}`);
            }

            setCookie('token', token, 365);

            navigate("/menu");
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <Form action={ "/" } method={ "post" } className={ "form" }>
            <Input onChange={ changeUserName } type={"text"} placeholder={"Ваше ім'я"} ariaLabel={"Ваше ім'я"} value={ userName } />
            <Button onClick={ showUserName } text={"Start Order"} className={"btn"} />
        </Form>
    );
}

export default CustomForm;
