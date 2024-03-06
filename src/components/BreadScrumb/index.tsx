import { NavLink, useParams } from "react-router-dom";
import { BreadContainer, BreadItem } from "./styles";
import { IoHome } from "react-icons/io5";

export default function BreadScrumb() {
  const { type } = useParams();

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

      <BreadItem>{type as string}</BreadItem>
    </BreadContainer>
  );
}
