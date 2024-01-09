import { SlClock } from "react-icons/sl";
import { CiMail } from "react-icons/ci";
import { PiPhoneThin } from "react-icons/pi";
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
import { useRef } from "react";

export default function Header() {
  const windowSize = useRef([window.innerWidth, window.innerHeight]);

  return (
    <WholeHeader>
      <ContainerHeader>
        <Column width="16%">
          <ImageContainer>
            <Image src={Logo} />
          </ImageContainer>
        </Column>
        <Column width="80%">
          <ItemContainer>
            <IconContainer>
              <SlClock color={"red"} size={"35%"} />
            </IconContainer>

            {windowSize.current[0] > 1200 && (
              <ItemContent>
                <p>Horário</p>
                <p>Seg - Sex 9:00 às 18:00</p>
              </ItemContent>
            )}
          </ItemContainer>

          <ItemContainer>
            <IconContainer>
              <CiMail color={"red"} size={"45%"} />
            </IconContainer>
            {windowSize.current[0] > 1200 && (
              <ItemContent>
                <p>Email</p>
                <p>contato@brasequip.com.br</p>
              </ItemContent>
            )}
          </ItemContainer>

          <ItemContainer>
            <IconContainer>
              <PiPhoneThin color={"red"} size={"50%"} />
            </IconContainer>
            {windowSize.current[0] > 1200 && (
              <ItemContent>
                <p>Ligue para gente</p>
                <p>(61) 98175-0559</p>
              </ItemContent>
            )}
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
