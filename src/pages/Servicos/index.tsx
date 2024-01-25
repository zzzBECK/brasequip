import Button from "../Home/components/Button";
import Flag from "../Home/components/Flag";
import { HeaderContainer, WholePage } from "../styles";
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

export default function Servicos() {
  return (
    <WholePage>
      <HeaderContainer>
        <Image>
          <ImageOverlay />
          <TextPosition>
            <Flag text="Um pouco sobre nosso trabalho" />
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
        </Image>
      </HeaderContainer>
      <ServicosContainer>
        <ServicosTitle>
          <h1>Nossas Soluções</h1>
        </ServicosTitle>
        <ServicosContent>
          <div
            style={{
              display: "flex",
              minHeight: "30em",
              minWidth: "20em",
              backgroundImage: "url('montagem.jpg')",
              backgroundSize: "contain",
            }}
          ></div>
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
            <Button text="Ver mais" />
          </VisaoGeralText>
          <VisaoGeralImage />
        </VisaoGeralContent>
      </VisaoGeralContainer>
    </WholePage>
  );
}
