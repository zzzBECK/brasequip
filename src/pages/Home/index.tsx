import { useContext, useEffect, useRef, useState } from "react";
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
import { ServicesContainer, ServicesRow, Title } from "./styles";
import { ThemeContext } from "../../ThemeContext";
import darkTheme from "../../theme/darkTheme";
import theme from "../../theme/theme";

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
    const distance = targetPosition - startPosition - 30;
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

  const { isDarkMode } = useContext(ThemeContext);

  return (
    <WholePage>
      <HeaderContainer ref={headerRef} data-aos="fade-zoom-in">
        <Image>
          <ImageOverlay
            style={{
              display: isDarkMode || windowSize.width < 1200 ? "flex" : "none",
            }}
          />
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
              com a segurança e eficiência é inabalável. Oferecemos soluções
              ágeis e orientações na escolha do equipamento ideal.
            </p>
            <Button
              text="Ver mais"
              onClick={() => scrollToContent(headerRef)}
            />
          </TextPosition>
        </Image>
      </HeaderContainer>
      <ServicesContainer
        className="padding"
        theme={isDarkMode ? darkTheme : theme}
      >
        <Title
          style={{
            color: "inherit",
            textAlign: "center",
            fontWeight: "700",
            lineHeight: "1.2",
          }}
          data-aos="fade-zoom-in"
        >
          CONHEÇA OS
          <br /> SERVIÇOS
        </Title>
        <ServicesRow>
          <ServiceCard
            title="Montagem e desmontagem"
            description="Realizamos montagem e desmontagem de equipamentos de elevação, dentro das normas de segurança vigentes no país, com profissionais treinados e certificados."
            Icon={FaTools}
            fadeType="right"
            linkTo={"servico/montagem"}
          />
          <ServiceCard
            title="Reforma de equipamentos"
            description="Revitalizamos seus equipamentos com reformas detalhadas, adequando-os de acordo com as normas vigentes, prolongando a vida útil e otimizando o desempenho para atender às demandas do seu projeto."
            Icon={GiGearHammer}
            fadeType="left"
            linkTo={"servico/reforma"}
          />
        </ServicesRow>
        <ServicesRow>
          <ServiceCard
            title="Manutenção preventiva e corretiva"
            description="A manutenção preventiva envolve mensalmente a checagem e testes de todos os itens de segurança do equipamento, parte estrutural, mecânica e elétrica. Com foco em durabilidade e performance, nossa manutenção preventiva previne paradas não programadas, maximizando a produtividade de sua obra."
            Icon={MdSecurity}
            fadeType="right"
            linkTo={"servico/manutencao"}
          />
          <ServiceCard
            title="Teste de END"
            description="Realizamos os Teste de END, com Laudo assinado por profissional habilitado, conforme a NR-18.11.7, “e”: laudos dos ensaios não destrutivos dos eixos dos motofreios e dos freios de emergência, sendo a periodicidade definida por profissional legalmente habilitado, obedecidos os prazos máximos previstos pelo fabricante no manual de manutenção do equipamento."
            Icon={SiGooglesearchconsole}
            fadeType="left"
            linkTo={"servico/end"}
          />
        </ServicesRow>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
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
