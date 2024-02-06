import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/RASTER_LOGO.png";
import SubHeader from "../SubHeader";
import {
  Column,
  ContainerHeader,
  Image,
  ImageContainer,
  WholeHeader,
} from "./styles";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 500;
      setIsScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <WholeHeader isScrolled={isScrolled}>
      <ContainerHeader className="padding">
        <Column width="16%" justifyContent="flex-start">
          <ImageContainer>
            <NavLink
              to="/brasequip/"
              end
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
                width: "100%",
              }}
              onClick={() => scrollToTop()}
            >
              <Image src={Logo} />
            </NavLink>
          </ImageContainer>
        </Column>
        <Column width="80%">
          <SubHeader />
        </Column>
      </ContainerHeader>
    </WholeHeader>
  );
}
