const Input = ({
    className,
    type = "text",
    placeholder = "Your full name",
    ariaLabel = "Your full name",
    value = "",
    onChange = () => {},
    readOnly,
    required
}) => {
    return (
        <input
            className={ className }
            type={ type }
            placeholder={ placeholder }
            aria-label={ ariaLabel }
            value={ value }
            onChange={ onChange }
            readOnly={ readOnly ?? false }
            required={ required ?? false }
        />
    );
}

export default Input;
