import { setPrice, ucfirst } from "../../helpers/helper.js";
import Button from "../Button.jsx";

const CartItem = ({ cart }) => {
    const { id, name, price, quantity } = cart;

    return (
        <div className="cart-item">
            <span className="quantity-text">{ id }×</span>
            <span>{ ucfirst(name) }</span>
            <span className="price">{setPrice(price)}</span>
            <div className="quantity-controls">
                <Button className={"quantity-btn"} text={"-"}/>
                <span>{ quantity }</span>
                <Button className={"quantity-btn"} text={"+"}/>
                <Button className={"delete-btn"} text={"DELETE"} />
            </div>
        </div>
    );
}

export default CartItem;
