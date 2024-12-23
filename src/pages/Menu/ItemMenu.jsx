import { setPrice, ucfirst } from "../../helpers/helper.js";
import Image from "../../components/Image.jsx";
import CartControls from "./CartControls.jsx";
import { useEffect, useState } from "react";
import { useCart } from "../../contexts/CartProvider.jsx";

const ItemMenu = ({ pizza, onIncrease, onDecrease, onAdd, onDelete }) => {
    const { state } = useCart();

    const { imageUrl, name, ingredients, unitPrice, soldOut, id } = pizza;

    const [isCounter, setIsCounter] = useState(false);

    const [counter, setCounter] = useState(1);

    useEffect(() => {
        const setCounterAndIsCounter = () => {
            state.items.forEach(item => {
                setIsCounter(id === item.id);
                setCounter(item.quantity);
            });
        }
        setCounterAndIsCounter();
    }, []);

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
