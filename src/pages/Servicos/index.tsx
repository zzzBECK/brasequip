import Flag from "../Home/components/Flag";
import { HeaderContainer, WholePage } from "../styles";
import { Body, Image, TextPosition, ImageOverlay } from "./styles";

export default function Servicos() {
  return (
    <WholePage>
      <HeaderContainer>
        <Image>
          <ImageOverlay />
          <TextPosition>
            <Flag text="Um pouco sobre nosso trabalho" />
            <h1
              style={{
                fontSize: "60px",
                lineHeight: "1",
                maxWidth: "600px",
              }}
            >
              Serviços
            </h1>
          </TextPosition>
        </Image>
      </HeaderContainer>
      <Body>
        <h1 style={{ color: "black" }}>Nada a exibir!</h1>
      </Body>
    </WholePage>
  );
}
