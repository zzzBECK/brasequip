import { IoHome } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { BreadContainer, BreadItem } from "./styles";
import NavigateWithPosition from "../NavigateWithPosition";
import { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";
import darkTheme from "../../theme/darkTheme";
import theme from "../../theme/theme";

interface BreadScrumbProps {
  title: string;
}

export default function BreadScrumb({ title }: BreadScrumbProps) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  const { isDarkMode } = useContext(ThemeContext);

  return (
    <BreadContainer
      style={{
        boxShadow: isDarkMode
          ? "0px 0px 10px 0px rgba(255, 255, 255, 0.1)"
          : "0 0 10px 0 rgba(0, 0, 0, 0.1)",
      }}
      theme={isDarkMode ? darkTheme : theme}
    >
      <NavLink
        to={"/"}
        onClick={scrollToTop}
        style={{
          textDecoration: "none",
          color: "inherit",
        }}
      >
        <BreadItem
          isThereHover
          style={{
            opacity: "0.7",
          }}
        >
          <IoHome size={"1.2rem"} />
        </BreadItem>
      </NavLink>

      <p style={{ fontSize: "clamp(0.8rem, 1.5vw, 1.2rem)" }}>{">"}</p>

      <NavigateWithPosition to="/servicos">
        <BreadItem isThereHover style={{ opacity: "0.9" }}>
          <p>Serviços</p>
        </BreadItem>
      </NavigateWithPosition>

      <p style={{ fontSize: "clamp(0.8rem, 1.5vw, 1.2rem)" }}>{">"}</p>

      <BreadItem>{title}</BreadItem>
    </BreadContainer>
  );
}
