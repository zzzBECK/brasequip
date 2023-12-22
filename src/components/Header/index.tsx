import {
  Column,
  ContainerHader,
  ContainerSubHeader,
  Image,
  ImageContainer,
  ItemContainer,
  SubHeaderItem,
  WholeHeader,
} from "./styles";

import Logo from "../../assets/RASTER_LOGO.png";

export default function Header() {
  return (
    <WholeHeader>
      <ContainerHader>
        <Column width="40%">
          <ImageContainer>
            <Image src={Logo} />
          </ImageContainer>
        </Column>
        <Column width="80%">
          <ItemContainer>
            <p>Horário</p>
            <p>Seg - Sex 9:00 às 18:00</p>
          </ItemContainer>
          <ItemContainer>
            <p>Email</p>
            <p>contato@brasequip.com.br</p>
          </ItemContainer>
          <ItemContainer>
            <p>Ligue para gente</p>
            <p>(61) 98175-0559</p>
          </ItemContainer>
        </Column>
      </ContainerHader>
      <ContainerSubHeader>
        <Column width="50%">
          <SubHeaderItem border>
            <p>Página inicial</p>
          </SubHeaderItem>
          <SubHeaderItem border>
            <p>Sobre nós</p>
          </SubHeaderItem>
          <SubHeaderItem border>
            <p>Serviços</p>
          </SubHeaderItem>
          <SubHeaderItem>
            <p>Contato</p>
          </SubHeaderItem>
        </Column>
        <Column width="50%"></Column>
      </ContainerSubHeader>
    </WholeHeader>
  );
}
