import { useEffect, useState } from "react";
import { HeaderContainer, Image, ImageOverlay, WholePage } from "../styles";
import { Body } from "./styles";

export default function Sobre() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const isThereFlag = windowSize.width > 1100;

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

  return (
    <WholePage>
      <HeaderContainer>
        <Image>
          <ImageOverlay />
        </Image>
      </HeaderContainer>
      <Body>
        <h1 style={{ color: "black" }}>Nada a exibir!</h1>
      </Body>
    </WholePage>
  );
}
