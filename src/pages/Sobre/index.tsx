// Importação de componentes necessários
import Flag from "../Home/components/Flag";
import { HeaderContainer, WholePage } from "../styles";
import { Image, ImageOverlay, SobreContainer, TextPosition } from "./styles";

export default function Sobre() {
  return (
    <WholePage>
      <HeaderContainer>
        <Image>
          <ImageOverlay />
          <TextPosition>
            <Flag text="Saiba mais sobre nossa empresa" />
            <h1
              style={{
                fontSize: "60px",
                lineHeight: "1",
                maxWidth: "600px",
              }}
            >
              Sobre Nós
            </h1>
          </TextPosition>
        </Image>
      </HeaderContainer>
      <SobreContainer className="padding">
        <h1>Nossa História</h1>
        <p>
          Desde julho de 2005, a BRASEQUIP tem sido uma referência no setor de
          elevação e movimentação de cargas. Iniciamos nossas operações com um
          compromisso firme de fornecer soluções de alta qualidade em venda e
          locação de máquinas e equipamentos para elevação. Com mais de duas
          décadas de experiência acumulada, nos destacamos pela excelência em
          serviços de manutenção, montagem e desmontagem de equipamentos, sempre
          priorizando a segurança e o conforto de nossos clientes.
        </p>
        <h1 style={{ marginTop: "1em" }}>Nossos Serviços e Equipamentos</h1>
        <p>
          Oferecemos uma ampla gama de equipamentos para atender às diversas
          necessidades dos nossos clientes, incluindo andaime fachadeiro,
          balancim automático, elevadores de obra (cabo de aço e do tipo
          cremalheira), gruas, mini-gruas e retroescavadeiras. Além disso, somos
          especializados na revisão e reforma de elevadores de obra e gruas,
          garantindo que todos os equipamentos estejam em conformidade com as
          normas vigentes. Um aspecto fundamental de nosso compromisso com a
          qualidade é o emprego de Testes de END (Ensaios Não Destrutivos),
          garantindo a integridade e segurança dos equipamentos através de
          técnicas avançadas de inspeção.
        </p>

        <h1 style={{ marginTop: "1em" }}>Qualidade e Segurança</h1>
        <p>
          A segurança de nossos clientes e colaboradores é nossa prioridade
          máxima. Por isso, contamos com uma equipe altamente treinada e
          capacitada, com profissionais que possuem mais de 20 anos de
          experiência no setor. Todos os nossos técnicos são qualificados
          conforme as normas NR-18 e NR-35, e dispomos de engenheiros mecânicos
          e técnicos em segurança do trabalho para assegurar a máxima qualidade
          e segurança em todos os serviços prestados. Nossa abordagem inclui a
          realização de Testes de END, utilizando técnicas como partículas
          magnéticas, ultrassom e líquidos penetrantes, para assegurar que cada
          equipamento atende aos mais altos padrões de segurança e qualidade
          antes de ser entregue aos nossos clientes.
        </p>

        <h1 style={{ marginTop: "1em" }}>Compromisso com a Excelência</h1>
        <p>
          Estamos localizados às margens da BR-070, em Ceilândia-DF, em uma área
          de 10.000 m², onde nossos clientes podem visitar nosso pátio de
          montagem e conhecer nossa gama de equipamentos para pronta entrega. A
          BRASEQUIP possui seguro de responsabilidade civil para todos os seus
          equipamentos e serviços, além de seguro de vida para todos os seus
          colaboradores, refletindo nosso compromisso com a responsabilidade e a
          excelência.
        </p>

        <h1 style={{ marginTop: "1em" }}>Venha nos Conhecer</h1>
        <p>
          Convidamos você a fazer-nos uma visita e conhecer de perto tudo que a
          BRASEQUIP tem a oferecer. Nossa equipe está pronta para atendê-lo e
          encontrar as melhores soluções para suas necessidades de elevação e
          movimentação de cargas. Estamos localizados próximo ao posto campeão,
          com facilidade de acesso e uma estrutura pronta para servir aos mais
          variados projetos.
        </p>
        <p>
          Juntos, elevamos padrões de qualidade, segurança e eficiência,
          reforçando nosso compromisso com a satisfação total dos nossos
          clientes. Seja para comprar, locar ou solicitar serviços de manutenção
          e montagem, incluindo os avançados Testes de END para garantir a
          máxima segurança e desempenho, a BRASEQUIP é sua parceira de
          confiança.
        </p>
      </SobreContainer>
    </WholePage>
  );
}
