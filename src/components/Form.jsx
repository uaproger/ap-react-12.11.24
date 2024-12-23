const Form = (props) => {
    const {
        action,
        className,
        method,
        encType,
        target,
        noValidate,
        children,
        onSubmit
    } = props;

    return (
        <form
            action={ action }
            className={ className }
            method={ method }
            encType={ encType }
            target={ target }
            noValidate={ noValidate }
            onSubmit={ onSubmit }
        >{ children }</form>
    );
}

export default Form;
