import Header from "./components/Header.jsx";
import Main from "./pages/Main.jsx";
import Menu from "./pages/Menu/Menu.jsx";
import Cart from "./pages/Cart/Cart.jsx";
import NotFound from "./pages/NotFound.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import OrderForm from "./pages/OrderForm/OrderForm.jsx";
import OrderStatus from "./pages/OrderStatus/OrderStatus.jsx";
import Footer from "./components/Footer.jsx";
import { useCart } from "./contexts/CartProvider.jsx";
import { isEmpty } from "./helpers/helper.js";

const App = () => {
    const { state } = useCart();

    return (
        <BrowserRouter>
            <div className={ "container" }>
                <Header />
                <Routes>
                    <Route path={ "/" } element={ <Main /> } />
                    <Route path={ "/menu" } element={ <Menu /> } />
                    <Route path={ "/cart" } element={ <Cart /> } />
                    <Route path={ "/order/form" } element={ <OrderForm /> } />
                    <Route path={ "/orders/:id" } element={ <OrderStatus /> } />

                    <Route path={ "*" } element={ <NotFound /> } />
                </Routes>
                {!isEmpty(state.items) && <Footer state={ state } />}
            </div>
        </BrowserRouter>
    );
}

export default App
