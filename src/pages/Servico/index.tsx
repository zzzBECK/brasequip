import { useParams } from "react-router-dom";
import Flag from "../Home/components/Flag";
import { WholePage } from "../styles";
import Art from "./components/Art";
import End from "./components/End";
import Fixacao from "./components/Fixacao";
import Manutencao from "./components/Manutencao";
import Montagem from "./components/Montagem";
import Reforma from "./components/Reforma";
import {
  Content,
  HeaderContainer,
  Image,
  ImageOverlay,
  TextPosition,
} from "./styles";

function selectService(type: string) {
  switch (type) {
    case "manutencao":
      return <Manutencao />;
    case "montagem":
      return <Montagem />;
    case "reforma":
      return <Reforma />;
    case "fixacao":
      return <Fixacao />;
    case "art":
      return <Art />;
    case "end":
      return <End />;
    default:
      return <End />;
  }
}

export default function Servico() {
  const { type } = useParams();

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

      <Content className="padding">{selectService(type as string)}</Content>
    </WholePage>
  );
}
