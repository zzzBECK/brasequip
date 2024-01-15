import Header from "../../components/Header";
import Button from "./components/Button";
import {
  HeaderContainer,
  Image,
  ImageOverlay,
  ServicesContainer,
  ServicesRow,
  TextPosition,
  WholePage,
} from "./styles";

export default function Home() {
  return (
    <WholePage>
      <HeaderContainer>
        <Header />
        <Image>
          <ImageOverlay />
          <TextPosition>
            <h1
              style={{
                fontSize: "60px",
                lineHeight: "1",
                maxWidth: "600px",
              }}
            >
              Elevando Padrões Alcançando Alturas
            </h1>
            <p>
              Especialistas em elevação, a BRASEQUIP oferece venda e locação de
              equipamentos de alta performance para sua obra. Nosso compromisso
              com a segurança e eficiência é inabalável. Descubra soluções ágeis
              para guindastes, mini-gruas e muito mais.
            </p>
            <Button text="Ver mais" />
          </TextPosition>
        </Image>
        <ServicesContainer>
          <ServicesRow>
            <div
              style={{
                backgroundColor: "blue",
                display: "flex",
                width: "50%",
                height: "100%",
              }}
            >
              .
            </div>
            <div
              style={{
                backgroundColor: "pink",
                display: "flex",
                width: "50%",
                height: "100%",
              }}
            >
              .
            </div>
          </ServicesRow>
          <ServicesRow>
            <div
              style={{
                backgroundColor: "yellow",
                display: "flex",
                width: "50%",
                height: "100%",
              }}
            >
              .
            </div>
            <div
              style={{
                backgroundColor: "red",
                display: "flex",
                width: "50%",
                height: "100%",
              }}
            >
              .
            </div>
          </ServicesRow>
        </ServicesContainer>
      </HeaderContainer>
    </WholePage>
  );
}
