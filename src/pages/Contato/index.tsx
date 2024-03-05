import Flag from "../Home/components/Flag";
import { HeaderContainer, WholePage } from "../styles";
import Form from "./components/Form";

import { Image, ImageOverlay, Body, TextPosition } from "./styles";

export default function Contato() {
  return (
    <WholePage>
      <HeaderContainer>
        <Image>
          <ImageOverlay />
          <TextPosition>
            <Flag text="Fale Conosco" />
            <h1
              style={{
                fontSize: "60px",
                lineHeight: "1",
                maxWidth: "600px",
              }}
            >
              Contato
            </h1>
          </TextPosition>
        </Image>
      </HeaderContainer>
      <Body className="padding">
        <Form />
      </Body>
    </WholePage>
  );
}
