import { useController } from "react-hook-form";

const Input = ({
    className,
    type = "text",
    placeholder = "Your name",
    ariaLabel = "Your name",
    name,
    control
}) => {
    if (!control) {
        return null;
    }

    const { field } = useController({ name, control });

    return (
        <input
            className={ className }
            type={ type }
            placeholder={ placeholder }
            aria-label={ ariaLabel }
            {...field}
        />
    );
}

export default Input;
