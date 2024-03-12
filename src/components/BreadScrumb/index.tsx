import { IoHome } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { BreadContainer, BreadItem } from "./styles";
import NavigateWithPosition from "../NavigateWithPosition";

interface BreadScrumbProps {
  title: string;
}

export default function BreadScrumb({ title }: BreadScrumbProps) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <BreadContainer>
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
