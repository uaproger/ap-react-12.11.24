const Button = (props) => {
    const {
        type,
        text,
        className,
        onClick,
        ariaLabel
    } = props;

    return (
        <button
            type={ type }
            onClick={ onClick }
            className={ className }
            aria-label={ ariaLabel }
        >{ text }</button>
    );
}

export default Button;
