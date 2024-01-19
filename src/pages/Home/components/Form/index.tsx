import Flag from "../Flag";
import { Column1, Column2, FormContainer, TitleContainer } from "./styles";

export default function Form() {
  return (
    <FormContainer>
      <Column1>
        <TitleContainer>
          <Flag text="Contato" />
          <h1 style={{ lineHeight: "1" }}>
            Solicite uma
            <br /> proposta
          </h1>
          <p>Soluções personalizadas e sob demanda</p>
        </TitleContainer>
      </Column1>
      <Column2></Column2>
    </FormContainer>
  );
}
