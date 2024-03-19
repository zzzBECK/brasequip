import { useState, useEffect, useRef, useContext } from "react";
import { IoArrowDownCircleSharp } from "react-icons/io5";
import theme from "../../theme/theme";
import Flag from "../Home/components/Flag";
import { HeaderContainer, WholePage } from "../styles";
import Form from "./components/Form";

import { Image, ImageOverlay, Body, TextPosition } from "./styles";
import { ThemeContext } from "../../ThemeContext";
import darkTheme from "../../theme/darkTheme";

export default function Contato() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const isThereButton = windowSize.width <= 620;

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const headerRef = useRef(null);

  const scrollToContent = (headerRef: React.RefObject<HTMLDivElement>) => {
    if (!headerRef.current) return;

    const targetPosition = headerRef.current.offsetHeight;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition - 50;
    const startTime =
      "now" in window.performance ? performance.now() : new Date().getTime();

    const easeInOutQuad = (
      time: number,
      start: number,
      distance: number,
      duration: number
    ) => {
      time /= duration / 2;
      if (time < 1) return (distance / 2) * time * time + start;
      time--;
      return (-distance / 2) * (time * (time - 2) - 1) + start;
    };

    const animation = (currentTime: number) => {
      const timeElapsed = currentTime - startTime;
      const run = easeInOutQuad(timeElapsed, startPosition, distance, 500);
      window.scrollTo(0, run);

      if (timeElapsed < 500) requestAnimationFrame(animation);
    };

    requestAnimationFrame(animation);
  };

  const { isDarkMode } = useContext(ThemeContext);

  return (
    <WholePage theme={isDarkMode ? darkTheme : theme}>
      <HeaderContainer ref={headerRef}>
        <Image>
          <ImageOverlay />
          <TextPosition>
            <Flag text="Fale Conosco" />
            <h1
              style={{
                fontSize: "60px",
                lineHeight: "1",
                maxWidth: "600px",
              }}
            >
              Contato
            </h1>
          </TextPosition>
          <div
            style={{
              position: "absolute",
              bottom: "10%",
              left: "50%",
              transform: "translateX(-50%)",
              width: "4em",
              height: "4em",
              zIndex: 1000,
              display: isThereButton ? "flex" : "none",
            }}
            onClick={() => scrollToContent(headerRef)}
          >
            <IoArrowDownCircleSharp size={"100%"} color={theme.colors.red} />
          </div>
        </Image>
      </HeaderContainer>
      <Body className="padding">
        <Form />
      </Body>
    </WholePage>
  );
}
