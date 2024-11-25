import Form from "./Form.jsx";

const Home = ({ counterParams }) => {
    return (
        <main>
            <h1>The best pizza.</h1>
            <p className="subtitle">Straight out of the oven, straight to you.</p>
            <p className="welcome">👉 Welcome! Please start by telling us your name:</p>
            <Form counterParams={ counterParams } />
        </main>
    );
}

export default Home;
