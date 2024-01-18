import { HeaderContainer, Image, ImageOverlay, WholePage } from "../styles";
import { Body } from "./styles";

export default function Contato() {
  return (
    <WholePage>
      <HeaderContainer>
        <Image>
          <ImageOverlay />
        </Image>
      </HeaderContainer>
      <Body>
        <h1 style={{ color: "black" }}>Nada a exibir!</h1>
      </Body>
    </WholePage>
  );
}
