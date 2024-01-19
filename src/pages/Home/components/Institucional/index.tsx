import Flag from "../Flag";
import {
  Container,
  ContentContainer,
  Content,
  Image,
  Column1,
  Column2,
  ImagemColuna2,
} from "./styles";

export default function Institucional() {
  return (
    <Container>
      <Image />
      <ContentContainer>
        <Content>
          <Column1>
            <Flag text="Quem somos" />
            <h1>INSTITUCIONAL</h1>
            <p>
              Fundada em julho de 2005, a BRASEQUIP se destaca na venda e
              locação de máquinas e equipamentos para elevação, oferecendo
              também serviços de manutenção, montagem e desmontagem. Nosso
              portfólio inclui andaimes, plataformas automáticas, elevadores de
              obra e gruas. Com foco na segurança e conforto dos clientes, nossa
              equipe é altamente qualificada, proporcionando serviços de
              manutenção preventiva e corretiva, além de inspeções técnicas.
              Localizada em Ceilândia-DF, em uma área de 10.000 metros
              quadrados, a BRASEQUIP é sinônimo de qualidade e segurança no
              segmento de equipamentos para construção.
            </p>
          </Column1>
          <Column2>
            <ImagemColuna2 />
          </Column2>
        </Content>
      </ContentContainer>
    </Container>
  );
}
