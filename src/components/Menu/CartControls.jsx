import Button from "../Button.jsx";
import { useState } from "react";

const CartControls = () => {
    const [isCounter, setIsCounter] = useState(false);

    const [counter, setCounter] = useState(1);

    const decreasingNumberPizzas = () => {
        setCounter(counter - 1);
    }
    const increasingNumberPizzas = () => {
        setCounter(counter + 1);
    }
    const showNumberPizzas = () => {
        setIsCounter(!isCounter);
    }

    return (
        <div className="cart-controls">
            {!isCounter
                ? (<Button onClick={showNumberPizzas} className={"add-to-cart"} text={"ADD TO CART"}/>)
                : (
                    <div className="counter">
                        <Button onClick={decreasingNumberPizzas} className={"decrement"} ariaLabel={"Decrease quantity"} text={"-"} />
                        <span>{counter}</span>
                        <Button onClick={increasingNumberPizzas} className={"increment"} ariaLabel={"Increase quantity"} text={"+"} />
                    </div>
                )
            }
        </div>
    );
}

export default CartControls;
