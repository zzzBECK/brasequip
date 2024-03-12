import { useNavigate } from "react-router-dom";

interface NavigateWithPositionProps {
    to: string;
    children: React.ReactNode;
}

const NavigateWithPosition = ({ to, children }: NavigateWithPositionProps) => {
    const navigate = useNavigate();

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        navigate(to);
    };

    return (
        <a href={to} onClick={handleClick} style={{ textDecoration: "none", color: "inherit" }}>
            {children}
        </a>
    );
};

export default NavigateWithPosition;
