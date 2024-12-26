import Header from "./components/Header.jsx";
import Main from "./pages/Main.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Footer from "./components/Footer.jsx";
import { useCart } from "./contexts/CartProvider.jsx";
import { isEmpty } from "./helpers/helper.js";
import { lazy, Suspense } from "react";

const NotFoundPage = lazy(() => import("./pages/NotFound.jsx"));
const Menu = lazy(() => import("./pages/Menu/Menu.jsx"));
const Cart = lazy(() => import("./pages/Cart/Cart.jsx"));
const OrderForm = lazy(() => import("./pages/OrderForm/OrderForm.jsx"));
const OrderStatus = lazy(() => import("./pages/OrderStatus/OrderStatus.jsx"));

const App = () => {
    const {state} = useCart();

    const loading = <div style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        fontSize: "2rem",
        transform: "translate(-50%, -50%)",
        zIndex: 999,
    }} >loading...</div>;

    return (
        <BrowserRouter>
            <div className={"container"}>
                <Header/>
                <Routes>
                    <Route path={"/"} element={<Main />} />

                    <Route path={"/menu"} element={
                        <Suspense fallback={ loading }>
                            <Menu />
                        </Suspense>
                    }/>
                    <Route path={"/cart"} element={
                        <Suspense fallback={ loading }>
                            <Cart />
                        </Suspense>
                    } />
                    <Route path={"/order/form"} element={
                        <Suspense fallback={ loading }>
                            <OrderForm />
                        </Suspense>
                    } />
                    <Route path={"/order/:id"} element={
                        <Suspense fallback={ loading }>
                            <OrderStatus />
                        </Suspense>
                    } />

                    <Route
                        path={"*"}
                        element={
                            <Suspense fallback={ loading }>
                                <NotFoundPage />
                            </Suspense>
                        }
                    />
                </Routes>
                {!isEmpty(state.items) && <Footer state={state}/>}
            </div>
        </BrowserRouter>
    );
}

export default App
