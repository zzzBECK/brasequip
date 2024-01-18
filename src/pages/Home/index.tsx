import { useEffect, useState } from "react";
import {
  HeaderContainer,
  Image,
  ImageOverlay,
  TextPosition,
  WholePage,
} from "../styles";
import Button from "./components/Button";
import Flag from "./components/Flag";
import { Service, ServicesContainer, ServicesRow } from "./styles";
import { IoMdBuild } from "react-icons/io";

export default function Home() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const isThereFlag = windowSize.width > 1100;

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <WholePage>
      <HeaderContainer>
        <Image>
          <ImageOverlay />
          <TextPosition>
            {isThereFlag && <Flag />}
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
      </HeaderContainer>

      <ServicesContainer>
        <h1
          style={{
            color: "black",
            textAlign: "center",
            margin: "2em 0",
            fontWeight: "700",
            lineHeight: "1.2",
          }}
        >
          CONHEÇA OS
          <br /> SERVIÇOS
        </h1>
        <ServicesRow>
          <Service>
            <IoMdBuild
              style={{
                color: "black",
                fontSize: "2.4em",
                marginBottom: "0.8em",
                opacity: "0.8",
              }}
            />
            <h2
              style={{
                color: "black",
                fontWeight: "500",
                lineHeight: "1",
                marginBottom: "0.5em",
              }}
            >
              Montagem e desmontagem
            </h2>
            <p
              style={{
                color: "black",
                textAlign: "inherit",
              }}
            >
              Garantimos montagem e desmontagem eficientes de equipamentos,
              assegurando a excelência e a segurança que construíram nossa
              reputação sólida.
            </p>
          </Service>
          <Service>
            <IoMdBuild
              style={{
                color: "black",
                fontSize: "2.4em",
                marginBottom: "0.8em",
                opacity: "0.8",
              }}
            />
            <h2
              style={{
                color: "black",
                fontWeight: "500",
                lineHeight: "1",
                marginBottom: "0.5em",
              }}
            >
              Montagem e desmontagem
            </h2>
            <p
              style={{
                color: "black",
                textAlign: "inherit",
              }}
            >
              Garantimos montagem e desmontagem eficientes de equipamentos,
              assegurando a excelência e a segurança que construíram nossa
              reputação sólida.
            </p>
          </Service>
        </ServicesRow>
        <ServicesRow>
          <Service>
            <IoMdBuild
              style={{
                color: "black",
                fontSize: "2.4em",
                marginBottom: "0.8em",
                opacity: "0.8",
              }}
            />
            <h2
              style={{
                color: "black",
                fontWeight: "500",
                lineHeight: "1",
                marginBottom: "0.5em",
              }}
            >
              Montagem e desmontagem
            </h2>
            <p
              style={{
                color: "black",
                textAlign: "inherit",
              }}
            >
              Garantimos montagem e desmontagem eficientes de equipamentos,
              assegurando a excelência e a segurança que construíram nossa
              reputação sólida.
            </p>
          </Service>
          <Service>
            <IoMdBuild
              style={{
                color: "black",
                fontSize: "2.4em",
                marginBottom: "0.8em",
                opacity: "0.8",
              }}
            />
            <h2
              style={{
                color: "black",
                fontWeight: "500",
                lineHeight: "1",
                marginBottom: "0.5em",
              }}
            >
              Montagem e desmontagem
            </h2>
            <p
              style={{
                color: "black",
                textAlign: "inherit",
              }}
            >
              Garantimos montagem e desmontagem eficientes de equipamentos,
              assegurando a excelência e a segurança que construíram nossa
              reputação sólida.
            </p>
          </Service>
        </ServicesRow>
      </ServicesContainer>
    </WholePage>
  );
}
