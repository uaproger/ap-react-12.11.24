import "./OrderForm.css";
import Form from "../../components/Form.jsx";
import { UserContext } from "../../contexts/UserProvider.jsx";
import { useContext } from "react";
import Input from "../../components/Input.jsx";
import Button from "../../components/Button.jsx";
import Label from "../../components/Label.jsx";

const OrderForm = () => {
    const { userName } = useContext(UserContext);

    return (
        <div className={ "container-order-form" }>
            <h1>Ready to order? Let's go!</h1>
            <Form>
                <div className={ "form-group" }>
                    <Label htmlFor={ "firstName" }>First Name</Label>
                    <Input id={ "firstName" } value={ userName } placeholder={ "First Name" } readOnly />
                </div>

                <div className={ "form-group" }>
                    <Label htmlFor={ "phone" }>Phone number</Label>
                    <Input type={ "tel" } id={ "phone" } placeholder={ "Phone number" } required />
                </div>

                <div className={ "form-group" }>
                    <Label htmlFor={ "address" }>Address</Label>
                    <div className={ "input-wrapper" }>
                        <Input id={ "address" } placeholder={ "Address" } required />
                    </div>
                </div>

                <div className={ "checkbox-group" }>
                    <div className={ "checkbox-wrapper" }>
                        <Input type={ "checkbox" } id={ "priority" } />
                        <Label htmlFor={ "priority" }>Want to give your order priority?</Label>
                    </div>
                </div>

                <Button type={ "submit" } className={ "order-btn" } text={ "Order now for €12.00" } />
            </Form>
        </div>
    );
}

export default OrderForm;
