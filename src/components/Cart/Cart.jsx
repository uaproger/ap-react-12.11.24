import "./Cart.css";
import { cartItems } from "../../config/data.js";
import CartItem from "./CartItem.jsx";
import Button from "../Button.jsx";

const Cart = ({ setShowCart }) => {
    return (
        <div className="cart-container">
            <a href="#" onClick={ () => setShowCart(false) } className="back-link">← Back to menu</a>
            <h1 className="cart-title">Your cart, AlexProger</h1>

            <div className="cart-items">
                {cartItems.map(cart => (<CartItem key={ cart.id } cart={ cart } />))}
            </div>

            <div className="cart-actions">
                <Button className={"order-btn"} text={"Order pizzas"} />
                <Button className={"clear-btn"} text={"Clear cart"} />
            </div>
        </div>
    );
}

export default Cart;
