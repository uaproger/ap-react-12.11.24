import ItemMenu from "./ItemMenu.jsx";
import "./Menu.css";
import { useEffect, useState } from "react";
import { api } from "../../config/api.js";

const Menu = () => {
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
            {loading ? (
                <p>Loading pizzas...</p>
            ) : pizzas.length > 0 ? (
                pizzas.map((pizza) => <ItemMenu key={pizza.id} pizza={pizza} />)
            ) : (
                <p>No pizzas available.</p>
            )}
        </div>
    );
}

export default Menu;
