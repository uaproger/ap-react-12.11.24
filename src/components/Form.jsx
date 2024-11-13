import Input from "./Input.jsx";
import Button from "./Button.jsx";

const Form = () => {
    return (
        <form action="/" method="post">
            <Input type="text" placeholder="Ваше ім'я" ariaLabel="Ваше ім'я" />
            <Button text="Start Order" className="btn" />
        </form>
    );
}

export default Form;
