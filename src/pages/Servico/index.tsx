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
  BackgroundDark,
  TextPosition,
} from "./styles";
import BreadScrumb from "../../components/BreadScrumb";
import Elevador from "./components/Elevador";
import Locacao from "./components/Locacao";

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
    case "elevador":
      return <Elevador />;
    case "locacao":
      return <Locacao />;
    default:
      return <End />;
  }
}

function selectTitle(type: string) {
  switch (type) {
    case "manutencao":
      return "Manutenção";
    case "montagem":
      return "Montagem e Desmontagem";
    case "reforma":
      return "Reforma de Equipamentos";
    case "fixacao":
      return "Projeto de Fixação";
    case "art":
      return "EMPRESA REGISTRADA NO CREA-DF SOB O N.º 11727";
    case "end":
      return "Teste de END";
    case "elevador":
      return "Elevadores Cremalheira";
    case "locacao":
      return "Locação de Equipamentos";
    default:
      return "Teste de END";
  }
}

export default function Servico() {
  const { type } = useParams();

  return (
    <WholePage>
      <HeaderContainer>
        <Image>
          <ImageOverlay />
          <BackgroundDark />
          <TextPosition className="padding">
            <Flag text="Informações gerais" />
            <h1
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                lineHeight: "1",
                maxWidth: "600px",
              }}
            >
              {selectTitle(type as string)}
            </h1>
          </TextPosition>
        </Image>
      </HeaderContainer>

      <Content className="padding">
        <BreadScrumb
          title={
            selectTitle(type as string) ===
            "EMPRESA REGISTRADA NO CREA-DF SOB O N.º 11727"
              ? "ART"
              : selectTitle(type as string)
          }
        />
        {selectService(type as string)}
      </Content>
    </WholePage>
  );
}
