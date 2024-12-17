import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import "./css/App.css";
import UserProvider from "./contexts/UserProvider.jsx";

createRoot(document.getElementById('root')).render(
<StrictMode>
    <UserProvider>
        <App />
    </UserProvider>
</StrictMode>,
)
