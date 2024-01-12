import Header from "../../components/Header";
import { Image, WholePage, HeaderContainer, Teste } from "./styles";

export default function Home() {
  return (
    <WholePage>
      <HeaderContainer>
        <Header />
        <Image />
        <Teste>
          <h1 style={{ fontSize: "60px" }}>
            Elevando Padrões Alcançando Alturas
          </h1>
          <p>
            Especialistas em elevação, a BRASEQUIP oferece venda e locação de
            equipamentos de alta performance para sua obra. Nosso compromisso
            com a segurança e eficiência é inabalável. Descubra soluções ágeis
            para guindastes, mini-gruas e muito mais.
          </p>
        </Teste>
      </HeaderContainer>
    </WholePage>
  );
}
