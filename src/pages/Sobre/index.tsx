import Flag from "../Home/components/Flag";
import { HeaderContainer, WholePage } from "../styles";
import { ImageOverlay, SobreContainer, TextPosition, Image } from "./styles";

export default function Sobre() {
  return (
    <WholePage>
      <HeaderContainer>
        <Image>
          <ImageOverlay />
          <TextPosition>
            <Flag text="Saiba mais sobre nossa empresa" />
            <h1
              style={{
                fontSize: "60px",
                lineHeight: "1",
                maxWidth: "600px",
              }}
            >
              Sobre Nós
            </h1>
          </TextPosition>
        </Image>
      </HeaderContainer>

      <SobreContainer></SobreContainer>
    </WholePage>
  );
}
