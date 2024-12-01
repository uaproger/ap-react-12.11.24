import { pizzas } from "../../config/data.js";
import ItemMenu from "./ItemMenu.jsx";
import "./Menu.css";

const Menu = () => {
    return (
        <div className="menu-container">
            {pizzas.map((pizza) => (
                <ItemMenu key={ pizza.id } pizza={ pizza } />
            ))}
        </div>
    );
}

export default Menu;
