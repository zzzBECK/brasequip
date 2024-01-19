import { ButtonStyle } from "./styles";

interface IButton {
  text: string;
  type?: "submit" | "button" | "reset";
}
export default function Button({ text, type }: IButton) {
  return <ButtonStyle type={type}>{text}</ButtonStyle>;
}
