import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import "./css/App.css";
import UserProvider from "./contexts/UserProvider.jsx";
import CartProvider from "./contexts/CartProvider.jsx";

createRoot(document.getElementById('root')).render(
<StrictMode>
    <CartProvider>
        <UserProvider>
            <App />
        </UserProvider>
    </CartProvider>
</StrictMode>,
)
