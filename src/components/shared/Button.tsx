import {ReactNode} from "react";

interface ButtonProps {
    content?: string | ReactNode;
    onClick: () => void;
    className: string;
}

export const Button = ({content, onClick, className} : ButtonProps) => {
    return (<button onClick={onClick} className={className}>{content}</button>)
}
