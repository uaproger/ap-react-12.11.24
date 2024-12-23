import Input from "./Input.jsx";
import Button from "./Button.jsx";
import { useNavigate } from "react-router";
import { useUser } from "../contexts/UserProvider.jsx";
import Form from "./Form.jsx";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const CustomForm = () => {
    const navigate = useNavigate();

    const { userName, setUserName } = useUser();

    const schema = z.object({
        userName: z.string().min(2, { message: "Name must have at least 2 characters" }),
    });

    const form = useForm({
        mode: "onBlur",
        defaultValues: {
            userName: ""
        },
        resolver: zodResolver(schema)
    });

    const changeUserName = (event) => {
        setUserName(event.target.value);
    }

    const showUserName = (event) => {
        event.preventDefault();
        navigate("/menu");
        form.reset();
    }

    return (
        <FormProvider {...form}>
            <Form onSubmit={ form.handleSubmit(showUserName) }>
                <div>
                    <Input
                        onChange={ changeUserName }
                        type={ "text" }
                        placeholder={ "Your name" }
                        ariaLabel={ "Your name" }
                        name={ "userName" }
                        control={ form.control }
                    />
                    {form.formState.errors.userName && <p style={{fontSize: "12px"}}>{form.formState.errors.userName.message}</p>}
                </div>
                <Button onClick={ showUserName } disabled={ !form.formState.isValid } text={"Start Order"} className={"btn"} />
            </Form>
        </FormProvider>
    );
}

export default CustomForm;
