import ItemMenu from "./ItemMenu.jsx";
import Image from "../../components/Image.jsx";
import "./Menu.css";
import { useEffect, useState } from "react";
import { api } from "../../config/api.js";
import { useCart } from "../../contexts/CartProvider.jsx";

const Menu = () => {
    const {
        increasingNumberPizzas,
        decreasingNumberPizzas,
        showNumberPizzas,
        deleteItem
    } = useCart();
    const [pizzas, setPizzas] = useState([]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getPizzas = async () => {
            try {
                const res = await fetch(api.pizzas);
                if (!res.ok) {
                    throw new Error(`Помилка HTTP! статус: ${res.status}`);
                }
                const data = await res.json();
                setPizzas(data.data);
            } catch (error) {
                console.error("Помилка отримання піци: ", error);
            } finally {
                setLoading(false);
            }
        };

        getPizzas();
    }, []);

    return (
        <div className="menu-container">
            {loading
                ? (
                    <p>
                        <span>Loading pizzas...</span>
                        <Image image={{
                            imageUrl: "/media/svg/loader.svg",
                            name: "loader",
                            className: "pizza-loader"
                        }} />
                    </p>
                )
                : pizzas.length > 0
                    ? (
                        pizzas.map((pizza) => <ItemMenu
                            key={ pizza.id }
                            pizza={ pizza }
                            onIncrease={ increasingNumberPizzas }
                            onDecrease={ decreasingNumberPizzas }
                            onAdd={ showNumberPizzas }
                            onDelete={ deleteItem }
                        />)
                    )
                    : (
                        <p>No pizzas available.</p>
                    )
            }
        </div>
    );
}

export default Menu;
