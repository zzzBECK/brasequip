import { FlagContainer, LeftColor } from "./styles";

export default function Flag() {
  return (
    <FlagContainer>
      <LeftColor />
      <p
        style={{
          whiteSpace: "nowrap",
        }}
      >
        Brasequip - Venda e locação de equipamentos
      </p>
    </FlagContainer>
  );
}
