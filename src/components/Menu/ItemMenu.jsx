import { ucfirst } from "../../helpers/helper.js";
import Image from "../Image.jsx";
import Button from "../Button.jsx";

const ItemMenu = ({ pizza }) => {
    const { imageUrl, name, ingredients, unitPrice, soldOut } = pizza;

    return (
        <div className="pizza-item">
            <Image image={{
                imageUrl,
                name,
                className: "pizza-image"
            }} />
            <div className="pizza-info">
                <h2>{ name }</h2>
                <p className="ingredients">
                    { ingredients.map(ingredient => ucfirst(ingredient)).join(', ') }
                </p>
                <p className={ soldOut ? "sold-out" : "price" }>€{ unitPrice.toFixed(2) }</p>
            </div>
            { !soldOut && (<Button className={"add-to-cart"} text={"ADD TO CART"} />) }
        </div>
    );
}

export default ItemMenu;
