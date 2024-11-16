import Version from "./Version.jsx";

const Header = () => {
    return (
        <header>
            <div className="logo">PIZZA DAY</div>
            <input type="text" className="search-bar" placeholder="Search for the order #"/>
            <div className="username">ALEXPROGER</div>
            <Version />
        </header>
    );
};

export default Header;
