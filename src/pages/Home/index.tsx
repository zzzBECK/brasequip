import Header from "../../components/Header";
import Button from "./components/Button";
import {
  HeaderContainer,
  Image,
  ImageOverlay,
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
        </Image>
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
      </HeaderContainer>
    </WholePage>
  );
}
