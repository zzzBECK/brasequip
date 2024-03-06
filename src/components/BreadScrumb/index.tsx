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
        to={"/brasequip/"}
        style={{
          textDecoration: "none",
          color: "inherit",
        }}
      >
        <BreadItem isThereHover>
          <IoHome />
        </BreadItem>
      </NavLink>

      <p style={{ fontSize: "1.2rem" }}>{">"}</p>

      <NavLink
        to={"/brasequip/servicos"}
        style={{
          textDecoration: "none",
          color: "inherit",
        }}
      >
        <BreadItem isThereHover>
          <p>Serviços</p>
        </BreadItem>
      </NavLink>

      <p style={{ fontSize: "1.2rem" }}>{">"}</p>

      <BreadItem>{title}</BreadItem>
    </BreadContainer>
  );
}
