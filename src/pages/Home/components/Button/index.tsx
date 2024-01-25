import { ButtonStyle } from "./styles";

interface IButton {
  text: string;
  type?: "submit" | "button" | "reset";
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  disabled?: boolean;
}
export default function Button({ text, type, onClick, disabled }: IButton) {
  console.log("Button disabled", disabled);
  return (
    <ButtonStyle type={type} onClick={onClick} disabled={disabled}>
      {text}
    </ButtonStyle>
  );
}
