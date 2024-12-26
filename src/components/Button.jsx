const Button = (props) => {
    const {
        type,
        text,
        className,
        onClick,
        ariaLabel,
        disabled = false
    } = props;

    return (
        <button
            type={ type }
            onClick={ onClick }
            className={ className }
            aria-label={ ariaLabel }
            disabled={ disabled }
        >{ text }</button>
    );
}

export default Button;
