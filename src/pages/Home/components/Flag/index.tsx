import { FlagContainer, LeftColor } from "./styles";

interface IFlag {
  text: string;
}

export default function Flag({ text }: IFlag) {
  return (
    <FlagContainer>
      <LeftColor />
      <p
        style={{
          whiteSpace: "nowrap",
        }}
      >
        {text}
      </p>
    </FlagContainer>
  );
}
