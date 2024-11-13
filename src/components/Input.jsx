const Input = ({
    type = "text",
    placeholder = "Your full name",
    ariaLabel = "Your full name"
}) => {
    return (
        <input type={ type } placeholder={ placeholder } aria-label={ ariaLabel } />
    );
}

export default Input;
