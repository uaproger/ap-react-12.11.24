const Input = ({
    className,
    type = "text",
    placeholder = "Your full name",
    ariaLabel = "Your full name",
    value = "",
    onChange = () => {}
}) => {
    return (
        <input
            className={ className }
            type={ type }
            placeholder={ placeholder }
            aria-label={ ariaLabel }
            value={ value }
            onChange={ onChange }
        />
    );
}

export default Input;
