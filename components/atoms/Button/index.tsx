import { MouseEventHandler, ReactNode } from "react";

interface ButtonProps {
    text: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button = (props: Partial<ButtonProps>) => {
    const { text, onClick } = props;
    return <button onClick={onClick}>{text}</button>;
};

export default Button;
