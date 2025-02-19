import ItemMenu from "./ItemMenu.jsx";
import Image from "../../components/Image.jsx";
import "./Menu.css";
import { useEffect, useState } from "react";
import { api } from "../../config/api.js";
import useFetch from "../../hooks/useFetch.jsx";
import { useCart } from "../../contexts/CartProvider.jsx";

const Menu = () => {
    const {
        increasingNumberPizzas,
        decreasingNumberPizzas,
        showNumberPizzas,
        deleteItem
    } = useCart();
    const [pizzas, setPizzas] = useState([]);

    const { data, error, isLoading } = useFetch(api.pizzas);

    useEffect(() => {
        if (data?.data) {
            setPizzas(data.data);
        }
    }, [data]);

    if (error) {
        console.error(error);
    }

    return (
        <div className="menu-container">
            {isLoading
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
