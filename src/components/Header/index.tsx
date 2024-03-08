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
import SubHeaderMobile from "../SubHeaderMobile";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 500);
    };

    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
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
          {windowSize.width > 800 ? (
            <SubHeader />
          ) : (
            <SubHeaderMobile height={isScrolled ? "4em" : "6em"} />
          )}
        </Column>
      </ContainerHeader>
    </WholeHeader>
  );
}
