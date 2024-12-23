import "./OrderStatus.css";
import Button from "../../components/Button.jsx";
import { useLocation } from "react-router";
import {isEmpty, setPrice} from "../../helpers/helper.js";

const OrderStatus = () => {
    const location = useLocation();
    const orderDetails = location.state?.orderDetails;
    console.log(orderDetails); // TODO: прибрати після дебагу

    return (
        <div className="container-order-status">
            <div className="header-order-status">
                <h1 className="order-title">Order #{orderDetails.id} status: preparing</h1>
                <div className="badges">
                    {orderDetails.priority && <span className={"badge badge-priority"}>PRIORITY</span>}
                    <span className={"badge badge-preparing" } >PREPARING ORDER</span>
                </div>
            </div>

            <div className="time-banner">
                <div className="time-left">Only 49 minutes left 😃</div>
                <div className="estimated-time">(Estimated delivery: Dec 12, 01:37 PM)</div>
            </div>

            <div className="order-details">
                {orderDetails.cart.map((item, index) => (
                    <div key={ item.pizzaId } className="pizza-item">
                        <div className="pizza-header">
                            <span className="pizza-name">{ index + 1 }× { item.name }</span>
                            <span className="pizza-price">{ setPrice(item.unitPrice) }</span>
                        </div>
                        <div className={ "pizza-name" }>Quantity: {item.quantity}</div>
                        <div className={ "pizza-price" }>Sum: { setPrice(item.totalPrice) }</div>
                        {!isEmpty(item.addIngredients) && <div className={"ingredients"}>{ item.addIngredients.join(" ") }</div>}
                    </div>
                ))}
            </div>

            <div className={ "price-breakdown" }>
                <div className={ "price-item" }>
                    <span className={ "price-label" }>Price pizza:</span>
                    <span className={ "price-value" }>{ setPrice(orderDetails.orderPrice) }</span>
                </div>
                {orderDetails.priority && (
                    <div className={ "price-item" }>
                        <span className={ "price-label" }>Price priority:</span>
                        <span className={ "price-value" }>{ setPrice(2) }</span>
                    </div>
                )}
                <div className={ "price-item" }>
                    <span className={ "price-label" }>To pay on delivery:</span>
                    <span className={ "price-value" }>{ setPrice(orderDetails.orderPrice + (orderDetails.priority ? 2 : 0)) }</span>
                </div>
            </div>
        </div>
    );
}

export default OrderStatus;
