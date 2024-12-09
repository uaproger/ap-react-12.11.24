import Image from "../components/Image.jsx";
import { NavLink } from "react-router";

const NotFound = () => {
    return (
        <main>
            <h1>404 Not Found</h1>
            <NavLink to={"/"} style={{color: "#4A90E2"}}>Go to Home page</NavLink>
            <Image image={{
                imageUrl: "/media/svg/not-found.svg",
                name: "not-found",
                className: "not-found",
            }} />
        </main>
    );
}

export default NotFound;
