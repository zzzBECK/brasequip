import { ButtonStyle } from "./styles";

interface IButton {
  text: string;
  type?: "submit" | "button" | "reset";
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}
export default function Button({ text, type, onClick }: IButton) {
  return (
    <ButtonStyle type={type} onClick={onClick}>
      {text}
    </ButtonStyle>
  );
}
