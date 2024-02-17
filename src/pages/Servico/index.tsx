import Flag from "../Home/components/Flag";
import { WholePage } from "../styles";
import End from "./components/End";
import {
  Content,
  HeaderContainer,
  Image,
  ImageOverlay,
  TextPosition,
} from "./styles";

export default function Servico() {
  return (
    <WholePage>
      <HeaderContainer>
        <Image>
          <ImageOverlay />
          <TextPosition>
            <Flag text="Informações gerais" />
            <h1
              style={{
                fontSize: "60px",
                lineHeight: "1",
                maxWidth: "600px",
              }}
            >
              Reforma de Equipamentos
            </h1>
          </TextPosition>
        </Image>
      </HeaderContainer>

      <Content className="padding">
        {/* <Manutencao /> */}
        {/* <Montagem /> */}
        {/* <Reforma /> */}
        {/* <Fixacao /> */}
        {/* <Art /> */}
        <End />
      </Content>
    </WholePage>
  );
}
