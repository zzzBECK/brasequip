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
        <BreadItem isThereHover>
          <IoHome size={"1.2rem"} />
        </BreadItem>
      </NavLink>

      <p style={{ fontSize: "clamp(0.8rem, 1.5vw, 1.2rem)", opacity: "0.9" }}>
        {">"}
      </p>

      <NavLink
        to={"/servicos"}
        style={{
          textDecoration: "none",
          color: "inherit",
        }}
      >
        <BreadItem isThereHover>
          <p>Serviços</p>
        </BreadItem>
      </NavLink>

      <p style={{ fontSize: "clamp(0.8rem, 1.5vw, 1.2rem)", opacity: "0.9" }}>
        {">"}
      </p>

      <BreadItem
        style={{
          opacity: "0.7",
        }}
      >
        {title}
      </BreadItem>
    </BreadContainer>
  );
}
