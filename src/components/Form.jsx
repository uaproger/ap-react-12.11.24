const Form = (props) => {
    const {
        action,
        className,
        method,
        encType,
        target,
        noValidate,
        children
    } = props;

    return (
        <form
            action={ action }
            className={ className }
            method={ method }
            encType={ encType }
            target={ target }
            noValidate={ noValidate }
        >{ children }</form>
    );
}

export default Form;
