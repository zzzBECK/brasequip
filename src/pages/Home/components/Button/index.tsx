import { NavLink } from "react-router-dom";
import { ButtonStyle } from "./styles";

interface IButton {
  text: string;
  type?: "submit" | "button" | "reset";
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  disabled?: boolean;
  linkTo?: string;
}
export default function Button({
  text,
  type,
  onClick,
  disabled,
  linkTo,
}: IButton) {
  // Conditionally render NavLink if linkTo is provided
  if (linkTo) {
    return (
      <NavLink to={linkTo} style={{ textDecoration: "none" }}>
        <ButtonStyle type={type} onClick={onClick} disabled={disabled}>
          {text}
        </ButtonStyle>
      </NavLink>
    );
  }

  return (
    <ButtonStyle type={type} onClick={onClick} disabled={disabled}>
      {text}
    </ButtonStyle>
  );
}
