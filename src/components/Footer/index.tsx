import Logo from "../../assets/RASTER_LOGO.png";
import {
  Column1,
  Container,
  Content,
  Image,
  LogoContainer,
  Row,
} from "./styles";

export default function Footer() {
  return (
    <Container>
      <Row className="padding">
        <LogoContainer>
          <Image src={Logo} />
        </LogoContainer>
        <h3
          style={{
            cursor: "pointer",
            height: "100%",
            alignItems: "center",
            display: "flex",
            width: "fit-content",
            fontSize: "clamp(0.8rem, 1.2vw, 1.5rem)",
          }}
        >
          Fale Conosco
        </h3>
        <h3
          style={{
            cursor: "pointer",
            height: "100%",
            alignItems: "center",
            display: "flex",
            width: "fit-content",

            fontSize: "clamp(0.8rem, 1.2vw, 1.5rem)",
          }}
        >
          Termos de Uso e privacidade
        </h3>
      </Row>
      <Content className="padding">
        <Column1>
          <div
            style={{
              fontSize: "clamp(0.7rem, 1.2vw, 1em)",
            }}
          >
            <p>BRASEQUIP BRASILIA EQUIPAMENTOS </p>
            <p>LTDA - BR-070, KM 8.5, LOTE 454, </p>
            <p>Ceilândia-DF / Fones: (61) 3585-3900 / </p>
            <p>(61) 3585-3899</p>
          </div>
        </Column1>
      </Content>
      <p
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "10%",
          fontSize: "clamp(0.8rem, 1.2vw, 1rem)",
          borderTop: "1px solid #4E5683",
        }}
      >
        Copyright © Brasequip - Desenvolvido por Alexandre Beck
      </p>
    </Container>
  );
}
