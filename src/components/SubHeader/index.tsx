import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdDarkMode } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { Column, IconsContainer, SubHeaderContainer, SubHeaderItem } from "./styles";

export default function SubHeader() {
  return (
    <SubHeaderContainer>
      <Column width="fit-content">
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
      <Column width="fit-content">
        <IconsContainer>
          <FaInstagram
            size="1.4em"
            className="icon"
            onClick={() => window.open("https://www.instagram.com", "_blank")}
          />
          <FaFacebook size="1.4em"
            className="icon"
            onClick={() => window.open("https://www.instagram.com", "_blank")}
          />
          <FaLinkedin size="1.4em"
            className="icon"
            onClick={() => window.open("https://www.instagram.com", "_blank")}
          />
          <MdDarkMode size="1.6em" className="icon" />
        </IconsContainer>
      </Column>
    </SubHeaderContainer>
  );
}
