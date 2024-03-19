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
import { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";
import darkTheme from "../../theme/darkTheme";
import theme from "../../theme/theme";

function selectService(type: string, flagMode: "light" | "dark") {
  switch (type) {
    case "manutencao":
      return <Manutencao flagMode={flagMode} />;
    case "montagem":
      return <Montagem flagMode={flagMode} />;
    case "reforma":
      return <Reforma flagMode={flagMode} />;
    case "fixacao":
      return <Fixacao flagMode={flagMode} />;
    case "art":
      return <Art flagMode={flagMode} />;
    case "end":
      return <End flagMode={flagMode} />;
    case "elevador":
      return <Elevador flagMode={flagMode} />;
    case "locacao":
      return <Locacao flagMode={flagMode} />;
    default:
      return <End flagMode={flagMode} />;
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

  const { isDarkMode } = useContext(ThemeContext);

  return (
    <WholePage theme={isDarkMode ? darkTheme : theme}>
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
        {selectService(type as string, isDarkMode ? "dark" : "light")}
      </Content>
    </WholePage>
  );
}
