import { SlClock } from "react-icons/sl";
import {
  Column,
  ContainerHeader,
  ContainerSubHeader,
  IconContainer,
  Image,
  ImageContainer,
  ItemContainer,
  ItemContent,
  SubHeaderItem,
  WholeHeader,
} from "./styles";

import Logo from "../../assets/RASTER_LOGO.png";

export default function Header() {
  return (
    <WholeHeader>
      <ContainerHeader>
        <Column width="10%">
          <ImageContainer>
            <Image src={Logo} />
          </ImageContainer>
        </Column>
        <Column width="80%">
          <ItemContainer>
            <IconContainer>
              <SlClock
                color={"red"}
                size={"35%"}
                style={{ fontWeight: "10px" }}
              />
            </IconContainer>

            <ItemContent>
              <p>Horário</p>
              <p>Seg - Sex 9:00 às 18:00</p>
            </ItemContent>
          </ItemContainer>

          <ItemContainer>
            <IconContainer>
              <SlClock />
            </IconContainer>

            <ItemContent>
              <p>Email</p>
              <p>contato@brasequip.com.br</p>
            </ItemContent>
          </ItemContainer>

          <ItemContainer>
            <IconContainer>
              <SlClock />
            </IconContainer>
            <ItemContent>
              <p>Ligue para gente</p>
              <p>(61) 98175-0559</p>
            </ItemContent>
          </ItemContainer>
        </Column>
      </ContainerHeader>
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
