import { FaFacebook, FaInstagram } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { MdDarkMode } from "react-icons/md";
import { NavLink } from "react-router-dom";
import {
  Column,
  IconsContainer,
  SubHeaderContainer,
  SubHeaderItem,
} from "./styles";

export default function SubHeader() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  };

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
              fontSize: "clamp(0.7rem, 0.8vw, 1rem)",
            })}
            onClick={() => scrollToTop()}
          >
            Página inicial
          </NavLink>
        </SubHeaderItem>

        <SubHeaderItem borderRight={"true"} borderHeight="30%">
          <NavLink
            to="/brasequip/servicos"
            end
            style={({ isActive }) => ({
              borderBottom: isActive ? "1px solid white" : "none",
              height: "100%",
              alignItems: "center",
              display: "flex",
              textDecoration: "none",
              color: "white",
              transition: "border-bottom 0.4s ease-in-out",
              fontSize: "clamp(0.7rem, 1.2vw, 1rem)",
              wordBreak: "break-word",
            })}
            onClick={() => scrollToTop()}
          >
            Serviços
          </NavLink>
        </SubHeaderItem>
        <SubHeaderItem borderRight="true" borderHeight="30%">
          <NavLink
            to="/brasequip/sobre"
            end
            style={({ isActive }) => ({
              borderBottom: isActive ? "1px solid white" : "none",
              height: "100%",
              alignItems: "center",
              display: "flex",
              textDecoration: "none",
              color: "white",
              transition: "border-bottom 0.4s ease-in-out",
              fontSize: "clamp(0.7rem, 0.8vw, 1rem)",
            })}
            onClick={() => scrollToTop()}
          >
            Sobre nós
          </NavLink>
        </SubHeaderItem>
        <SubHeaderItem borderRight={"false"} borderHeight="30%">
          <NavLink
            to="/brasequip/contato"
            end
            style={({ isActive }) => ({
              borderBottom: isActive ? "1px solid white" : "none",
              height: "100%",
              alignItems: "center",
              display: "flex",
              textDecoration: "none",
              color: "white",
              transition: "border-bottom 0.4s ease-in-out",
              fontSize: "clamp(0.7rem, 0.8vw, 1rem)",
            })}
            onClick={() => scrollToTop()}
          >
            Contato
          </NavLink>
        </SubHeaderItem>
        <IoIosArrowDown
          size="1.2em"
          style={{ cursor: "pointer", minWidth: "1em" }}
        />
      </Column>
      <Column width="fit-content">
        <IconsContainer>
          <FaInstagram
            size="1.4em"
            className="icon"
            onClick={() => window.open("https://www.instagram.com", "_blank")}
          />
          <FaFacebook
            size="1.4em"
            className="icon"
            onClick={() => window.open("https://www.instagram.com", "_blank")}
          />
          <MdDarkMode size="1.6em" className="icon" />
        </IconsContainer>
      </Column>
    </SubHeaderContainer>
  );
}
