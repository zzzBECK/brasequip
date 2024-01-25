import { FlagContainer, LeftColor } from "./styles";

interface IFlag {
  text: string;
  mode?: "light" | "dark";
}

export default function Flag({ text, mode = "dark" }: IFlag) {
  return (
    <FlagContainer
      style={{
        backgroundColor: mode === "light" ? "rgba(245, 245, 245)" : "",
      }}
    >
      <LeftColor />
      <p
        style={{
          whiteSpace: "nowrap",
          color: mode === "light" ? "#000" : "#fff",
        }}
      >
        {text}
      </p>
    </FlagContainer>
  );
}
