import { useEffect, useRef, useState } from "react";
import { FaTools } from "react-icons/fa";
import { GiGearHammer } from "react-icons/gi";
import { MdSecurity } from "react-icons/md";
import { SiGooglesearchconsole } from "react-icons/si";

import Form from "../../components/Form";
import {
  HeaderContainer,
  Image,
  ImageOverlay,
  TextPosition,
  WholePage,
} from "../styles";
import Button from "./components/Button";
import Flag from "./components/Flag";
import Institucional from "./components/Institucional";
import ServiceCard from "./components/ServiceCard";
import { ServicesContainer, ServicesRow } from "./styles";

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

  const headerRef = useRef(null);

  const scrollToContent = (headerRef: React.RefObject<HTMLDivElement>) => {
    if (!headerRef.current) return;

    const targetPosition = headerRef.current.offsetHeight;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition - 50;
    const startTime =
      "now" in window.performance ? performance.now() : new Date().getTime();

    const easeInOutQuad = (
      time: number,
      start: number,
      distance: number,
      duration: number
    ) => {
      time /= duration / 2;
      if (time < 1) return (distance / 2) * time * time + start;
      time--;
      return (-distance / 2) * (time * (time - 2) - 1) + start;
    };

    const animation = (currentTime: number) => {
      const timeElapsed = currentTime - startTime;
      const run = easeInOutQuad(timeElapsed, startPosition, distance, 500);
      window.scrollTo(0, run);

      if (timeElapsed < 500) requestAnimationFrame(animation);
    };

    requestAnimationFrame(animation);
  };

  return (
    <WholePage>
      <HeaderContainer ref={headerRef} data-aos="fade-zoom-in">
        <Image>
          <ImageOverlay />
          <TextPosition>
            {isThereFlag && (
              <Flag text={"Brasequip - Máquinas e equipamentos de elevação"} />
            )}
            <h1
              style={{
                fontSize: "60px",
                lineHeight: "1",
                maxWidth: "600px",
              }}
              data-aos="zoom-in"
            >
              Elevando Padrões Alcançando Alturas
            </h1>
            <p data-aos="zoom-in" data-aos-offset="-100">
              Especialistas em elevação, a BRASEQUIP oferece venda e locação de
              equipamentos de alta performance para sua obra. Nosso compromisso
              com a segurança e eficiência é inabalável. Descubra soluções ágeis
              para guindastes, mini-gruas e muito mais.
            </p>
            <Button
              text="Ver mais"
              onClick={() => scrollToContent(headerRef)}
            />
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
          data-aos="fade-zoom-in"
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
            Icon={FaTools}
            fadeType="right"
            linkTo={"servico/montagem"}
          />
          <ServiceCard
            title="Manutenção preventiva e corretiva"
            description="Com foco em durabilidade e performance, nossa manutenção preventiva e corretiva previne paradas não programadas, maximizando a produtividade de sua obra."
            Icon={MdSecurity}
            fadeType="left"
            linkTo={"servico/manutencao"}
          />
        </ServicesRow>
        <ServicesRow>
          <ServiceCard
            title="Reforma de equipamentos"
            description="Revitalizamos seus equipamentos com reformas detalhadas, prolongando a vida útil e otimizando o desempenho para atender às demandas do seu projeto."
            Icon={GiGearHammer}
            fadeType="right"
            linkTo={"servico/reforma"}
          />
          <ServiceCard
            title="Teste de END"
            description="Os Ensaios Não Destrutivos (END), são técnicas de inspeção de peças e equipamentos que avaliam a existência de descontinuidades (mecanismos de falha) nas estruturas dos materiais sem danificá-los."
            Icon={SiGooglesearchconsole}
            fadeType="left"
            linkTo={"servico/end"}
          />
        </ServicesRow>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "2em 0",
          }}
        >
          <Button
            text="Ver todos"
            linkTo="/servicos"
            onClick={() => window.scrollTo(0, 0)}
          />
        </div>
      </ServicesContainer>
      <Form />
      <Institucional />
    </WholePage>
  );
}
