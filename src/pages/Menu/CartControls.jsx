import Button from "../../components/Button.jsx";

const CartControls = ({ params }) => {
    const {
        isCounter,
        counter,
        showNumberPizzas,
        decreasingNumberPizzas,
        increasingNumberPizzas,
        deleteItem
    } = params;

    return (
        <div className={ "cart-controls" }>
            {!isCounter
                ? (<Button onClick={ showNumberPizzas } className={ "add-to-cart" } text={ "ADD TO CART" }/>)
                : (
                    <div style={{
                        display: "flex",
                        alignItems: "center",
                        columnGap: "1rem"
                    }}>
                        <div className="counter">
                            <Button onClick={ decreasingNumberPizzas } className={ "decrement" }
                                    ariaLabel={ "Decrease quantity" } text={ "-" }/>
                            <span>{ counter }</span>
                            <Button onClick={ increasingNumberPizzas} className={ "increment" }
                                    ariaLabel={ "Increase quantity" } text={ "+" }/>
                        </div>
                        <Button onClick={ deleteItem } className={ "add-to-cart" } text={ "DELETE" }/>
                    </div>
                )
            }
        </div>
    );
}

export default CartControls;
