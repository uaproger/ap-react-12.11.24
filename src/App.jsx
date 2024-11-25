import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import { useState } from "react";

const App = () => {
    const [showCart, setShowCart] = useState(false);

    const changeShowCart = () => {
        setShowCart(!showCart);
    }

    const cart = { showCart, setShowCart, changeShowCart };

    return (
        <div className="container">
            <Header cart={ cart } />
            <Main cart={ cart } />
        </div>
    );
}

export default App
