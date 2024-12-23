import CartItem from "./CartItem.jsx";
import Button from "../../components/Button.jsx";
import "./Cart.css";
import { NavLink, useNavigate } from "react-router";
import { useUser } from "../../contexts/UserProvider.jsx";
import { useCart } from "../../contexts/CartProvider.jsx";
import { useEffect } from "react";

const Cart = () => {
    const { userName } = useUser();

    const {
        state,
        dispatch,
        increasingNumberPizzas,
        decreasingNumberPizzas,
        deleteItem
    } = useCart();

    const navigate = useNavigate();

    useEffect(() => {
        if (state.count === 0) {
            navigate("/");
        }
    }, [state.count, navigate]);

    return (
        <div className={ "cart-container" }>
            <NavLink to={ "/menu" } className={ "back-link" }>← Back to menu</NavLink>
            <h1 className={ "cart-title" }>Your cart, { userName }</h1>

            <div className={ "cart-items" }>
                {state.items.map((item, index) => (<CartItem
                    key={ item.id }
                    item={ item }
                    index={ index }
                    onIncrease={ increasingNumberPizzas }
                    onDecrease={ decreasingNumberPizzas }
                    onDelete={ deleteItem }
                />))}
            </div>

            <div className={ "cart-actions" }>
                <Button className={ "order-btn" } text={
                    <NavLink to={ "/order/form" } className={ "btn-order-form" }>Order pizzas</NavLink>
                } />
                <Button className={ "clear-btn" } onClick={ () => dispatch({ type: "CLEAR_CART" }) } text={ "Clear cart" } />
            </div>
        </div>
    );
}

export default Cart;
