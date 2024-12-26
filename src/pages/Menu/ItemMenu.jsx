import { setPrice, ucfirst } from "../../helpers/helper.js";
import Image from "../../components/Image.jsx";
import CartControls from "./CartControls.jsx";
import { useState } from "react";
import { useCart } from "../../contexts/CartProvider.jsx";

const ItemMenu = ({ pizza, onIncrease, onDecrease, onAdd, onDelete }) => {
    const { state } = useCart();

    const { imageUrl, name, ingredients, unitPrice, soldOut, id } = pizza;

    const cartItem = state.items.find(item => item.id === id);

    const [isCounter, setIsCounter] = useState(!!cartItem);

    const [counter, setCounter] = useState(cartItem?.quantity || 1);

    const handleIncrease = (event) => {
        event.preventDefault();
        setCounter(counter + 1);
        onIncrease(id);
    }

    const handleDecrease = (event) => {
        event.preventDefault();
        if (counter > 1) {
            setCounter(counter - 1);
            onDecrease(id);
        }
    }

    const handleAdd = (event) => {
        event.preventDefault();
        setIsCounter(!isCounter);
        onAdd(pizza, counter);
    }

    const handleDelete = (event) => {
        event.preventDefault();
        setIsCounter(!isCounter);
        onDelete(id);
    }

    return (
        <div className={ "pizza-item" }>
            <Image image={{
                imageUrl,
                name,
                className: "pizza-image"
            }}/>
            <div className={ "pizza-info" }>
                <h2>{ name }</h2>
                <p className={ "ingredients" }>
                    {ingredients.map(ingredient => ucfirst(ingredient)).join(', ')}
                </p>
                {soldOut
                    ? (<p className={ "sold-out" }>SOLD OUT</p>)
                    : (<p className={ "price" }>{ setPrice(unitPrice) }</p>)
                }
            </div>
            {!soldOut && (<CartControls params={{
                isCounter,
                counter,
                decreasingNumberPizzas: handleDecrease,
                increasingNumberPizzas: handleIncrease,
                showNumberPizzas: handleAdd,
                deleteItem: handleDelete,
            }} />)}
        </div>
    );
}

export default ItemMenu;
