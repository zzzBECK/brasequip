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
        <h1>Quem somos nós</h1>
        <p>
          Na Brasequip, nos orgulhamos de ser mais que uma simples distribuidora
          de equipamentos industriais. Somos facilitadores da inovação e da
          eficiência em diversos setores da indústria brasileira. Nossa missão é
          prover soluções de alta qualidade que impulsionem a produtividade e o
          crescimento sustentável das empresas no Brasil. Comprometemo-nos em
          ser o elo que fortalece a indústria, superando desafios técnicos e
          operacionais com soluções inteligentes e adaptáveis. "Comprometidos
          com a evolução da indústria, superando expectativas através de
          tecnologia e excelência."
        </p>
        <h1 style={{ marginTop: "1em" }}>Por Que Escolher a Brasequip?</h1>
        <p>
          Optar pela Brasequip significa escolher um parceiro com sólida
          experiência no fornecimento de equipamentos e maquinários industriais.
          Destacamo-nos pela nossa capacidade de entender profundamente as
          necessidades técnicas de nossos clientes, oferecendo não apenas
          produtos, mas soluções completas que abrangem desde o planejamento até
          a execução e manutenção. Nossa seleção de produtos abrange desde itens
          de uso geral até equipamentos especializados, garantindo que cada
          cliente encontre exatamente o que precisa para elevar a eficiência e a
          segurança de suas operações. Entregamos não só qualidade, mas também
          confiança e suporte contínuo em todos os aspectos de nossos serviços.
        </p>

        <p>
          Ao escolher a Brasequip, você está optando por excelência, qualidade e
          inovação no setor industrial. Somos especializados em fornecer
          equipamentos que impulsionam a eficiência e a produtividade de
          negócios em todo o território nacional. Seja para fortalecer as
          operações de fábricas, viabilizar projetos de infraestrutura ou apoiar
          a inovação tecnológica em ambientes industriais, a Brasequip está
          pronta para atender suas necessidades com soluções personalizadas.
          Conecte-se conosco e descubra como podemos revolucionar a dinâmica de
          trabalho e a gestão de recursos na sua empresa com o melhor em
          equipamentos industriais.
        </p>
      </SobreContainer>
    </WholePage>
  );
}
