import "./OrderForm.css";
import Form from "../../components/Form.jsx";
import { useUser } from "../../contexts/UserProvider.jsx";
import Input from "../../components/Input.jsx";
import Button from "../../components/Button.jsx";
import Label from "../../components/Label.jsx";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useCart } from "../../contexts/CartProvider.jsx";
import { setPrice } from "../../helpers/helper.js";
import { api } from "../../config/api.js";
import { useNavigate } from "react-router";

const OrderForm = () => {
    const { userName } = useUser();

    const { state } = useCart();

    const navigator = useNavigate();

    const schema = z.object({
        firstName: z.string().min(2),
        phone: z.string(),
        address: z.string().min(6),
        priority: z.boolean().nullable()
    });

    const form = useForm({
        mode: "onBlur",
        defaultValues: {
            firstName: userName,
            phone: "+38",
            address: "",
            priority: false
        },
        resolver: zodResolver(schema)
    });

    const submit = async (event) => {
        try {
            const response = await fetch(api.order, {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    address: form.getValues("address"),
                    customer: form.getValues("firstName"),
                    phone: form.getValues("phone"),
                    priority: !!form.getValues("priority"),
                    position: "",
                    cart: [
                        ...state.items.map(item => {
                            return {
                                pizzaId: item.id,
                                name: item.name,
                                quantity: item.quantity,
                                totalPrice: (item.quantity * item.unitPrice),
                                unitPrice: item.unitPrice
                            }
                        })
                    ]
                })
            });
            if (!response.ok) {
                throw new Error(`Помилка HTTP! статус: ${response.status}`);
            }
            const data = await response.json();
            if (data.status === "success") {
                navigator(`/order/${data.data.id}`, {
                    state: { orderDetails: data.data },
                });
            }
        } catch (error) {
            event.preventDefault();
            console.error(error);
        }
        form.reset();
    }

    return (
        <div className={ "container-order-form" }>
            <h1>Ready to order? Let's go!</h1>
            <FormProvider {...form}>
                <Form onSubmit={ form.handleSubmit(submit) }>
                    <div className={ "form-group" }>
                        <Label htmlFor={ "firstName" }>First Name</Label>
                        <Input
                            control={ form.control }
                            name={ "firstName" }
                            placeholder={ "First Name" }
                        />
                        {form.formState.errors.firstName && <p style={{fontSize: "12px"}}>{form.formState.errors.firstName.message}</p>}
                    </div>

                    <div className={ "form-group" }>
                        <Label htmlFor={ "phone" }>Phone number</Label>
                        <Input
                            control={ form.control }
                            type={ "tel" }
                            name={ "phone" }
                            placeholder={ "Phone number" }
                        />
                        {form.formState.errors.phone && <p style={{fontSize: "12px"}}>{form.formState.errors.phone.message}</p>}
                    </div>

                    <div className={ "form-group" }>
                        <Label htmlFor={ "address" }>Address</Label>
                        <div className={ "input-wrapper" }>
                            <Input
                                control={ form.control }
                                name={ "address" }
                                placeholder={ "Address" }
                            />
                            {form.formState.errors.address && <p style={{fontSize: "12px"}}>{form.formState.errors.address.message}</p>}
                        </div>
                    </div>

                    <div className={ "checkbox-group" }>
                        <div className={ "checkbox-wrapper" }>
                            <Input
                                control={ form.control }
                                type={ "checkbox" }
                                name={ "priority" }
                            />
                            <Label htmlFor={ "priority" }>Want to give your order priority?</Label>
                        </div>
                    </div>

                    <Button disabled={ !form.formState.isValid } className={ "order-btn" } text={ "Order now for " + setPrice(state.totalPrice) } />
                </Form>
            </FormProvider>
        </div>
    );
}

export default OrderForm;
