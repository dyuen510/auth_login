import React from 'react';
import './Button.css';

const sizes = ["small", "medium", "large"];
const colors = ["primary", "danger", "info", 'success', 'default'];

const Button = ({
    onClick,
    icon,
    title,
    color,
    size
}) => {

    const btnSize = sizes.includes(size) ? size : "medium";
    const btnColor = colors.includes(color) ? color: "primary";
    return (
            <button
                className={`btn ${btnColor} ${btnSize} `}
                onClick={onClick}
            >
                <i>{icon}</i>
                {title}
            </button>
    )
}
export default Button;