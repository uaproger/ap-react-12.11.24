import { ucfirst } from "../../helpers/helper.js";
import Image from "../Image.jsx";
import CartControls from "./CartControls.jsx";
import {useState} from "react";

const ItemMenu = ({ pizza, params }) => {
    const { imageUrl, name, ingredients, unitPrice, soldOut } = pizza;

    const [isCounter, setIsCounter] = useState(false);

    const [counter, setCounter] = useState(1);

    const decreasingNumberPizzas = (event) => {
        event.preventDefault();
        setCounter(counter - 1);
    }
    const increasingNumberPizzas = (event) => {
        event.preventDefault();
        setCounter(counter + 1);
    }
    const showNumberPizzas = (event) => {
        event.preventDefault();
        setIsCounter(!isCounter);
    }

    return (
        <div className="pizza-item">
            <Image image={{
                imageUrl,
                name,
                className: "pizza-image"
            }}/>
            <div className="pizza-info">
                <h2>{name}</h2>
                <p className="ingredients">
                    {ingredients.map(ingredient => ucfirst(ingredient)).join(', ')}
                </p>
                {soldOut
                    ? (<p className={"sold-out"}>SOLD OUT</p>)
                    : (<p className={"price"}>€{unitPrice.toFixed(2)}</p>)
                }
            </div>
            {!soldOut && (<CartControls params={{
                isCounter,
                counter,
                decreasingNumberPizzas,
                increasingNumberPizzas,
                showNumberPizzas
            }} />)}
        </div>
    );
}

export default ItemMenu;
