import { setPrice, ucfirst } from "../../helpers/helper.js";
import Button from "../../components/Button.jsx";

const CartItem = ({ item, index, onIncrease, onDecrease, onDelete }) => {
    const { id, name, unitPrice, quantity } = item;

    return (
        <div className={ "cart-item" }>
            <span className={ "quantity-text" }>{ index + 1 }×</span>
            <span>{ ucfirst(name) }</span>
            <span className={ "price" }>{ setPrice(unitPrice) }</span>
            <div className={ "quantity-controls" }>
                <Button className={ "quantity-btn" } onClick={ () => onDecrease(id) } text={ "-" }/>
                <span>{ quantity }</span>
                <Button className={ "quantity-btn" } onClick={ () => onIncrease(id) } text={ "+" }/>
                <Button className={ "delete-btn" } onClick={ () => onDelete(id) } text={ "DELETE" } />
            </div>
        </div>
    );
}

export default CartItem;
