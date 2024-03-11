import { useCallback, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import SubHeader from "../SubHeader";
import SubHeaderMobile from "../SubHeaderMobile";
import { Column, ContainerHeader } from "./styles";
import Logo from "../../../public/logo.png";

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

  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <header
      style={{
        display: "flex",
        width: "100vw",
        maxWidth: "100%",
        height: isScrolled ? "4em" : "6em",
        flexDirection: "column",
        zIndex: 100000,
        backgroundColor: isScrolled
          ? "rgba(9, 18, 66, 1)"
          : "rgba(9, 18, 66, 0.1)",
        position: isScrolled ? "fixed" : "absolute",

        transition: "background-color 0.4s ease-in-out",
      }}
    >
      <ContainerHeader className="padding">
        <Column width="16%" justifyContent="flex-start">
          <NavLink
            to="/"
            onClick={scrollToTop}
            style={{
              display: "flex",
              height: "90%",
              width: "10em",
            }}
          >
            <div
              style={{
                display: "flex",
                height: "100%",
                width: windowSize.width > 800 ? "10em" : "8em",
                cursor: "pointer",
                backgroundImage: `url(${Logo})`,
                backgroundSize: isScrolled ? "100%" : "140%",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            />
          </NavLink>
        </Column>
        <Column width="80%">
          {windowSize.width > 800 ? (
            <SubHeader />
          ) : (
            <SubHeaderMobile height={isScrolled ? "4em" : "6em"} />
          )}
        </Column>
      </ContainerHeader>
    </header>
  );
}
