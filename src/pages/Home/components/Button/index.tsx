import { ButtonStyle } from "./styles";

interface IButton {
  text: string;
}
export default function Button({ text }: IButton) {
  return <ButtonStyle>{text}</ButtonStyle>;
}
