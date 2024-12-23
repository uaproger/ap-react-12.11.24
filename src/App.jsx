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
    const { state, dispatch } = useCart();

    const increasingNumberPizzas = (id) => {
        dispatch({ type: "INCREMENT", payload: { id } });
    }

    const decreasingNumberPizzas = (id) => {
        dispatch({ type: "DECREMENT", payload: { id } });
    }

    const showNumberPizzas = (pizza, qty) => {
        dispatch({
            type: "ADD_ITEM",
            payload: {
                item: pizza,
                qty,
            },
        });
    }

    const deleteItem = (id) => {
        dispatch({ type: "DELETE_ITEM", payload: { id } });
    }

    return (
        <BrowserRouter>
            <div className={ "container" }>
                <Header />
                <Routes>
                    <Route path={ "/" } element={ <Main /> } />
                    <Route path={ "/menu" } element={ <Menu
                        onIncrease={ increasingNumberPizzas }
                        onDecrease={ decreasingNumberPizzas }
                        onAdd={ showNumberPizzas }
                        onDelete={ deleteItem }
                    /> } />
                    <Route path={ "/cart" } element={ <Cart
                        onIncrease={ increasingNumberPizzas }
                        onDecrease={ decreasingNumberPizzas }
                        onDelete={ deleteItem }
                    /> } />
                    <Route path={ "/order/form" } element={ <OrderForm /> } />
                    <Route path={ "/order/:id" } element={ <OrderStatus /> } />

                    <Route path={ "*" } element={ <NotFound /> } />
                </Routes>
                {!isEmpty(state.items) && <Footer state={ state } />}
            </div>
        </BrowserRouter>
    );
}

export default App
