import Header from "./components/Header.jsx";
import Main from "./pages/Main.jsx";
import Menu from "./pages/Menu/Menu.jsx";
import Cart from "./pages/Cart/Cart.jsx";
import NotFound from "./pages/NotFound.jsx";
import { BrowserRouter, Route, Routes } from "react-router";

const App = () => {
    return (
        <BrowserRouter>
            <div className="container">
                <Header />
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/menu" element={<Menu />} />
                    <Route path="/cart" element={<Cart />} />

                    <Route path={"*"} element={<NotFound />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App
