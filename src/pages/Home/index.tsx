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
import { ServicesContainer, ServicesRow } from "./styles";
import { IoMdBuild } from "react-icons/io";
import ServiceCard from "./components/ServiceCard";
import { MdSecurity } from "react-icons/md";
import { MdBrush } from "react-icons/md";

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
          <ServiceCard
            title="Montagem e desmontagem"
            description="Garantimos montagem e desmontagem eficientes de equipamentos,
              assegurando a excelência e a segurança que construíram nossa
              reputação sólida."
            Icon={IoMdBuild}
          />
          <ServiceCard
            title="Manutenção preventiva e corretiva"
            description="Com foco em durabilidade e performance, nossa manutenção preventiva e corretiva previne paradas não programadas, maximizando a produtividade de sua obra."
            Icon={MdSecurity}
          />
        </ServicesRow>
        <ServicesRow>
          <ServiceCard
            title="Reforma de equipamentos"
            description="Revitalizamos seus equipamentos com reformas detalhadas, prolongando a vida útil e otimizando o desempenho para atender às demandas do seu projeto."
            Icon={MdBrush}
          />
          <ServiceCard
            title="SD WAN MPLS"
            description="Integração de dados, voz e vídeo em uma rede privativa para maximizar a comunicação entre pontos"
            Icon={IoMdBuild}
          />
        </ServicesRow>
      </ServicesContainer>
    </WholePage>
  );
}
