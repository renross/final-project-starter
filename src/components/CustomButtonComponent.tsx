import React from "react";

interface Props {
    borderColor?: string;
    border?: string;
    color: string;
    children?: React.ReactNode;
    height: string;
    width: string;
    onClick: () => void;
    radius?: string
}

const Button: React.FC<Props> = ({ 
    borderColor,
    border,
    color,
    children,
    height,
    width,
    onClick, 
    radius
}) => { 
    return (
        <button 
            onClick={onClick}
            style={{
                borderColor,
                backgroundColor: color,
                border,
                borderRadius: radius,
                height,
                width,
            }}>
            {children}
        </button>
    );
};

export default Button;
