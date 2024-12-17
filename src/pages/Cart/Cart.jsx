import CartItem from "./CartItem.jsx";
import Button from "../../components/Button.jsx";
import "./Cart.css";
import { cartItems } from "../../config/data.js";
import { NavLink } from "react-router";

const Cart = () => {
    return (
        <div className="cart-container">
            <NavLink to="/menu" className="back-link">← Back to menu</NavLink>
            <h1 className="cart-title">Your cart, AlexProger</h1>

            <div className="cart-items">
                {cartItems.map(cart => (<CartItem key={ cart.id } cart={ cart } />))}
            </div>

            <div className="cart-actions">
                <Button className={"order-btn"} text={
                    <NavLink to={"/order/form"} className={ "btn-order-form" }>Order pizzas</NavLink>
                } />
                <Button className={"clear-btn"} text={"Clear cart"} />
            </div>
        </div>
    );
}

export default Cart;
