import { useState, useEffect, useRef } from "react";
import theme from "../../theme/theme";
import Button from "../Home/components/Button";
import Flag from "../Home/components/Flag";
import { HeaderContainer, WholePage } from "../styles";
import ServiceCard from "./components/ServiceCard";
import {
  Image,
  ImageOverlay,
  ServicosContainer,
  ServicosContent,
  ServicosTitle,
  TextContent,
  TextPosition,
  VisaoGeralContainer,
  VisaoGeralContent,
  VisaoGeralImage,
  VisaoGeralText,
} from "./styles";

import { IoArrowDownCircleSharp } from "react-icons/io5";

export default function Servicos() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const isThereButton = windowSize.width <= 620;

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
      <HeaderContainer ref={headerRef}>
        <Image>
          <ImageOverlay />
          <TextPosition>
            <Flag text="Conheça nossos serviços" />
            <h1
              style={{
                fontSize: "60px",
                lineHeight: "1",
                maxWidth: "600px",
              }}
            >
              Serviços
            </h1>
          </TextPosition>
          <div
            style={{
              position: "absolute",
              bottom: "10%",
              left: "50%",
              transform: "translateX(-50%)",
              width: "4em",
              height: "4em",
              zIndex: 1000,
              display: isThereButton ? "flex" : "none",
            }}
            onClick={() => scrollToContent(headerRef)}
          >
            <IoArrowDownCircleSharp size={"100%"} color={theme.colors.red} />
          </div>
        </Image>
      </HeaderContainer>
      <ServicosContainer className="padding-services">
        <ServicosTitle>
          <h1>Nossos Serviços</h1>
        </ServicosTitle>
        <ServicosContent>
          <ServiceCard
            image="end.jpeg"
            title="Teste de END"
            description="(Ensaios Não Destrutivos) com Laudo Técnico"
            linkTo="/brasequip/servico/end"
          />
          <ServiceCard
            image="locacao.jpeg"
            title="Locação de equipamentos"
            description="Máquinas e equipamentos para elevação"
            linkTo="/brasequip/servico/locacao"
          />
          <ServiceCard
            image="museu.jpg"
            title="ART dos serviços contratados"
            description="Seguro de responsabilidade civil"
            linkTo="/brasequip/servico/art"
          />
          <ServiceCard
            image="montagem.jpg"
            title="Montagem e desmontagem"
            description="Equipamentos para elevação"
            linkTo="/brasequip/servico/montagem"
          />
          <ServiceCard
            image="manutencao.jpg"
            title="Manutenção"
            description="Preventiva e corretiva"
            linkTo="/brasequip/servico/manutencao"
          />
          <ServiceCard
            image="aguasclaras.jpeg"
            title="Reforma de equipamentos"
            description="Reforma de elevadores e gruas"
            linkTo="/brasequip/servico/reforma"
          />
          <ServiceCard
            image="fixacao.jpg"
            title="Projeto de Fixação"
            description="Emissão de laudo ART e estrutural"
            linkTo="/brasequip/servico/fixacao"
          />
          <ServiceCard
            image="cremalheira.jpeg"
            title="Elevador"
            description="Cremalheira"
            linkTo="/brasequip/servico/elevador"
          />
        </ServicosContent>
      </ServicosContainer>
      <VisaoGeralContainer className="padding">
        <VisaoGeralContent>
          <VisaoGeralText>
            <TextContent>
              <Flag text="Sobre Nós" mode="light" />
              <h1>Uma visão geral</h1>
              <p>
                A missão da BRASEQUIP é impulsionar a eficiência no setor de
                construção e manutenção, oferecendo uma ampla gama de máquinas e
                equipamentos para elevação, além de serviços especializados.
              </p>
              <div
                style={{
                  border: "1px solid gray",
                }}
              />
              <p>
                Acreditamos que ao facilitar o acesso a equipamentos e serviços
                de qualidade, promovemos o desenvolvimento econômico e a
                segurança no setor. Estamos comprometidos em contribuir para a
                evolução da indústria da construção, proporcionando uma base
                sólida para a realização de projetos eficazes, seguros e
                inovadores, atendendo empresas, governos e demais clientes em
                todo o território brasileiro.
              </p>
            </TextContent>
            <Button
              text="Ver mais"
              linkTo="/brasequip/sobre"
              onClick={() => window.scrollTo(0, 0)}
            />
          </VisaoGeralText>
          <VisaoGeralImage />
        </VisaoGeralContent>
      </VisaoGeralContainer>
    </WholePage>
  );
}
