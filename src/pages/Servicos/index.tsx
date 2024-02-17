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

export default function Servicos() {
  return (
    <WholePage>
      <HeaderContainer>
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
        </Image>
      </HeaderContainer>
      <ServicosContainer className="padding-services">
        <ServicosTitle>
          <h1>Nossos Serviços</h1>
        </ServicosTitle>
        <ServicosContent>
          <ServiceCard
            image="locacao.jpeg"
            title="Locação de equipamentos"
            description="Máquinas e equipamentos para elevação"
          />
          <ServiceCard
            image="montagem.jpg"
            title="Montagem e desmontagem"
            description="Equipamentos para elevação"
          />
          <ServiceCard
            image="manutencao.jpg"
            title="Manutenção"
            description="Preventiva e corretiva"
          />
          <ServiceCard
            image="aguasclaras.jpeg"
            title="Reforma de equipamentos"
            description="Reforma de elevadores e gruas"
          />
          <ServiceCard
            image="fixacao.jpg"
            title="Projeto de Fixação"
            description="Emissão de laudo ART e estrutural"
          />
          <ServiceCard
            image="museu.jpg"
            title="ART dos serviços contratados"
            description="Seguro de responsabilidade civil"
          />

          <ServiceCard
            image="end.jpeg"
            title="Teste de END"
            description="(Ensaios Não Destrutivos) com Laudo Técnico"
          />
          <ServiceCard
            image="cremalheira.jpeg"
            title="Elevador"
            description="Cremalheira"
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
            <Button text="Ver mais" />
          </VisaoGeralText>
          <VisaoGeralImage />
        </VisaoGeralContent>
      </VisaoGeralContainer>
    </WholePage>
  );
}
