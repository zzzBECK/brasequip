import { CiMail } from "react-icons/ci";
import { PiPhoneThin } from "react-icons/pi";
import { SlClock } from "react-icons/sl";
import Logo from "../../assets/RASTER_LOGO.png";
import {
  Column,
  Container,
  Content,
  IconContainer,
  Image,
  ItemContainer,
  ItemContent,
  LogoContainer,
  RoutesContainer,
  Row,
} from "./styles";
import theme from "../../theme/theme";
import { NavLink } from "react-router-dom";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <>
      <Container>
        <Row className="padding">
          <LogoContainer>
            <Image
              src={Logo}
              style={{ cursor: "pointer" }}
              onClick={() => scrollToTop()}
            />
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
          <Column>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                fontSize: "clamp(0.7rem, 0.8vw, 1em)",
                gap: "0.6rem",
              }}
            >
              <h3>Endereço</h3>
              <p>BRASEQUIP BRASILIA EQUIPAMENTOS</p>
              <p>LTDA - BR-070, KM 8.5, LOTE 454, Ceilândia-DF</p>
              <p>Fones: (61) 3585-3900 / (61) 3585-3899</p>
            </div>
          </Column>

          <Column>
            <RoutesContainer>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                <h3>Páginas</h3>
                <NavLink
                  to={"/brasequip/contato"}
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                  }}
                  onClick={() => scrollToTop()}
                >
                  <p className="hover">Contato</p>
                </NavLink>
                <NavLink
                  to={"/brasequip/servicos"}
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                  }}
                  onClick={() => scrollToTop()}
                >
                  <p className="hover">Serviços</p>
                </NavLink>
                <NavLink
                  to={"/brasequip/sobre"}
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                  }}
                  onClick={() => scrollToTop()}
                >
                  <p className="hover">Sobre Nós</p>
                </NavLink>
              </div>
            </RoutesContainer>
          </Column>
          <Column>
            <div
              style={{
                display: "flex",
                width: "100%",
                flexDirection: "column",
                gap: "1em",
              }}
            >
              <ItemContainer>
                <IconContainer>
                  <SlClock color={"red"} size={"35%"} />
                </IconContainer>

                <ItemContent>
                  <p style={{ userSelect: "none", fontWeight: "bold" }}>
                    Horário
                  </p>
                  <p>Seg - Sex 9:00 às 18:00</p>
                </ItemContent>
              </ItemContainer>

              <ItemContainer>
                <IconContainer>
                  <CiMail color={"red"} size={"45%"} />
                </IconContainer>
                <ItemContent>
                  <p style={{ userSelect: "none", fontWeight: "bold" }}>
                    Email
                  </p>
                  <p>contato@brasequip.com.br</p>
                </ItemContent>
              </ItemContainer>

              <ItemContainer>
                <IconContainer>
                  <PiPhoneThin color={"red"} size={"50%"} />
                </IconContainer>
                <ItemContent>
                  <p style={{ userSelect: "none", fontWeight: "bold" }}>
                    Ligue para gente
                  </p>
                  <p>(61) 98175-0558</p>
                </ItemContent>
              </ItemContainer>
            </div>
          </Column>
        </Content>
      </Container>
      <p
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "3em",
          fontSize: "clamp(0.8rem, 1.2vw, 1rem)",
          borderTop: "1px solid #4E5683",
          backgroundColor: theme.colors.darkBlue,
        }}
      >
        Copyright © Brasequip - Desenvolvido por Alexandre Beck
      </p>
    </>
  );
}
