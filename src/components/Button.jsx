const Button = ({ text, className, onClick, ariaLabel }) => {
    return (
        <button onClick={onClick} className={ className } aria-label={ariaLabel}>{ text }</button>
    );
}

export default Button;
