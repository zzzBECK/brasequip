import { NavLink } from "react-router-dom";
import { Column, SubHeaderItem } from "./styles";

export default function SubHeader() {
  return (
    <>
      <Column width="100%">
        <SubHeaderItem borderRight="true" borderHeight="30%">
          <NavLink
            to="/brasequip/"
            end
            style={({ isActive }) => ({
              borderBottom: isActive ? "1px solid white" : "none",
              height: "100%",
              alignItems: "center",
              display: "flex",
              textDecoration: "none",
              color: "white",
              transition: "border-bottom 0.4s ease-in-out",
            })}
          >
            Página inicial
          </NavLink>
        </SubHeaderItem>

        <SubHeaderItem borderRight="true" borderHeight="30%">
          <NavLink
            to="/brasequip/sobre"
            style={({ isActive }) => ({
              borderBottom: isActive ? "1px solid white" : "none",
              height: "100%",
              alignItems: "center",
              display: "flex",
              textDecoration: "none",
              color: "white",
              transition: "border-bottom 0.4s ease-in-out",
            })}
          >
            Sobre nós
          </NavLink>
        </SubHeaderItem>
        <SubHeaderItem borderRight={"true"} borderHeight="30%">
          <NavLink
            to="/brasequip/servicos"
            style={({ isActive }) => ({
              borderBottom: isActive ? "1px solid white" : "none",
              height: "100%",
              alignItems: "center",
              display: "flex",
              textDecoration: "none",
              color: "white",
              transition: "border-bottom 0.4s ease-in-out",
            })}
          >
            Serviços
          </NavLink>
        </SubHeaderItem>
        <SubHeaderItem borderRight={"false"} borderHeight="30%">
          <NavLink
            to="/brasequip/contato"
            style={({ isActive }) => ({
              borderBottom: isActive ? "1px solid white" : "none",
              height: "100%",
              alignItems: "center",
              display: "flex",
              textDecoration: "none",
              color: "white",
              transition: "border-bottom 0.4s ease-in-out",
            })}
          >
            Contato
          </NavLink>
        </SubHeaderItem>
      </Column>
    </>
  );
}
