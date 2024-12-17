import "./OrderStatus.css";
import Button from "../../components/Button.jsx";

const OrderStatus = () => {
    return (
        <div className="container-order-status">
            <div className="header-order-status">
                <h1 className="order-title">Order #5T460L status: preparing</h1>
                <div className="badges">
                    <Button className={ "badge badge-priority" } text={ "PRIORITY" } />
                    <Button className={ "badge badge-preparing" } text={ "PREPARING ORDER" } />
                </div>
            </div>

            <div className="time-banner">
                <div className="time-left">Only 49 minutes left 😃</div>
                <div className="estimated-time">(Estimated delivery: Dec 12, 01:37 PM)</div>
            </div>

            <div className="order-details">
                <div className="pizza-item">
                    <div className="pizza-header">
                        <span className="pizza-name">1× Margherita</span>
                        <span className="pizza-price">€12.00</span>
                    </div>
                    <div className="ingredients">Tomato, Mozzarella, Basil</div>
                </div>
            </div>

            <div className="price-breakdown">
                <div className="price-item">
                    <span className="price-label">Price pizza:</span>
                    <span className="price-value">€12.00</span>
                </div>
                <div className="price-item">
                    <span className="price-label">Price priority:</span>
                    <span className="price-value">€2.00</span>
                </div>
                <div className="price-item">
                    <span className="price-label">To pay on delivery:</span>
                    <span className="price-value">€14.00</span>
                </div>
            </div>
        </div>
    );
}

export default OrderStatus;
