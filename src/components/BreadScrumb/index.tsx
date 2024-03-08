import { IoHome } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { BreadContainer, BreadItem } from "./styles";

interface BreadScrumbProps {
  title: string;
}

export default function BreadScrumb({ title }: BreadScrumbProps) {
  return (
    <BreadContainer>
      <NavLink
        to={"/"}
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

      <NavLink
        to={"/servicos"}
        style={{
          textDecoration: "none",
          color: "inherit",
        }}
      >
        <BreadItem
          isThereHover
          style={{
            opacity: "0.9",
          }}
        >
          <p>Serviços</p>
        </BreadItem>
      </NavLink>

      <p style={{ fontSize: "clamp(0.8rem, 1.5vw, 1.2rem)" }}>{">"}</p>

      <BreadItem>{title}</BreadItem>
    </BreadContainer>
  );
}
