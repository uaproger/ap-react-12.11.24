import { setPrice } from "../helpers/helper.js";
import { NavLink } from "react-router";

const Footer = ({ state }) => {
    return (
        <footer>
            <div className={ "logo" }>{ state.count } { state.count > 1 ? "Pizzas" : "Pizza" } { setPrice(state.totalPrice) }</div>
            <div>
                <NavLink to={ "/cart" } className={ "footer-link" } >OPEN CART <span className={ "text-lg" } >→</span></NavLink>
            </div>
        </footer>
    );
}

export default Footer;
