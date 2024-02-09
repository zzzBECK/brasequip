import { useCallback, useEffect, useState } from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { IoIosArrowDown, IoMdMenu } from "react-icons/io";
import { MdDarkMode } from "react-icons/md";
import { NavLink } from "react-router-dom";
import theme from "../../theme/theme";

interface ISubHeaderMobile {
  height: string;
}

export default function SubHeaderMobile({ height }: ISubHeaderMobile) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Esta função é definida usando useCallback para que tenha a mesma referência
  // a menos que 'height' mude, o que é importante para addEventListener e removeEventListener
  const closeMenuOnScroll = useCallback(() => {
    if (height === "6em") {
      setIsMenuOpen(false);
    }
  }, [height]);

  useEffect(() => {
    // Verifique se o menu está aberto antes de adicionar o listener de scroll
    if (isMenuOpen) {
      window.addEventListener("scroll", closeMenuOnScroll);
    }

    // A função de limpeza remove o listener de scroll
    return () => {
      window.removeEventListener("scroll", closeMenuOnScroll);
    };
  }, [isMenuOpen, closeMenuOnScroll]); // Dependências do useEffect

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });

    setIsMenuOpen(false);
  };

  return (
    <div>
      <IoMdMenu size="2em" onClick={toggleMenu} style={{ cursor: "pointer" }} />
      {isMenuOpen && (
        <div
          style={{
            position: "fixed", // Fixo em relação à janela do navegador
            top: height, // Ajustado para a altura do cabeçalho
            left: 0,
            right: 0, // Estende da esquerda para a direita
            backgroundColor: "white",
            boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",
            zIndex: 1,
            display: "flex",
            flexDirection: "column", // Os links são dispostos em coluna
            maxHeight: "70vh", // Define a altura máxima para 100% da altura da viewport
            overflowY: "auto", // Permite rolagem vertical se o conteúdo exceder a altura da viewport
          }}
        >
          <NavLink
            to="/brasequip/"
            end
            style={({ isActive }) => ({
              height: "4em",
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              textDecoration: "none",
              color: "white",
              backgroundColor: isActive
                ? theme.colors.darkBlue
                : theme.colors.blue,
              transition: "border-bottom 0.4s ease-in-out",
              fontSize: "clamp(0.8rem, 1vw, 1.2rem)",
              borderTop: "2px solid" + theme.colors.blue,
            })}
            onClick={() => scrollToTop()}
          >
            Página Inicial
          </NavLink>
          <NavLink
            to="/brasequip/servicos"
            end
            style={({ isActive }) => ({
              height: "4em",
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              textDecoration: "none",
              color: "white",
              backgroundColor: isActive
                ? theme.colors.darkBlue
                : theme.colors.blue,
              transition: "border-bottom 0.4s ease-in-out",
              fontSize: "clamp(0.8rem, 1vw, 1.2rem)",
            })}
            onClick={() => scrollToTop()}
          >
            Serviços
          </NavLink>
          <NavLink
            to="/brasequip/sobre"
            end
            style={({ isActive }) => ({
              height: "4em",
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              textDecoration: "none",
              color: "white",
              backgroundColor: isActive
                ? theme.colors.darkBlue
                : theme.colors.blue,
              transition: "border-bottom 0.4s ease-in-out",
              fontSize: "clamp(0.8rem, 1vw, 1.2rem)",
            })}
            onClick={() => scrollToTop()}
          >
            Sobre nós
          </NavLink>
          <NavLink
            to="/brasequip/contato"
            end
            style={({ isActive }) => ({
              height: "4em",
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              textDecoration: "none",
              color: "white",
              backgroundColor: isActive
                ? theme.colors.darkBlue
                : theme.colors.blue,
              transition: "border-bottom 0.4s ease-in-out",
              fontSize: "clamp(0.8rem, 1vw, 1.2rem)",
            })}
            onClick={() => scrollToTop()}
          >
            Contato
          </NavLink>
          <NavLink
            to="/brasequip"
            end
            style={({ isActive }) => ({
              height: "4em",
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              textDecoration: "none",
              color: "white",
              gap: "0.5em",
              backgroundColor: isActive
                ? theme.colors.darkBlue
                : theme.colors.blue,
              transition: "border-bottom 0.4s ease-in-out",
              fontSize: "clamp(0.8rem, 1vw, 1.2rem)",
            })}
            onClick={() => scrollToTop()}
          >
            Outros
            <IoIosArrowDown />
          </NavLink>
          <div
            style={{
              display: "flex",
              height: "4em",
              width: "100%",
              backgroundColor: theme.colors.blue,
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
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
          </div>
        </div>
      )}
    </div>
  );
}
