import { ucfirst } from "../../helpers/helper.js";
import Image from "../Image.jsx";
import CartControls from "./CartControls.jsx";

const ItemMenu = ({ pizza }) => {
    const { imageUrl, name, ingredients, unitPrice, soldOut } = pizza;

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
            {!soldOut && (<CartControls />)}
        </div>
    );
}

export default ItemMenu;
