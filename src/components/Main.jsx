import Home from "./Home.jsx";
import Cart from "./Cart/Cart.jsx";

const Main = ({ cart }) => {
    const { showCart, setShowCart } = cart;

    return !showCart ? (<Home />) : (<Cart setShowCart={ setShowCart } />);
}

export default Main;
