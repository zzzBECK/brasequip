import React, { useCallback, useEffect, useState } from "react";
import { IoMdMenu } from "react-icons/io";

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

  return (
    <div>
      <IoMdMenu size="2em" onClick={toggleMenu} style={{ cursor: "pointer" }} />
      {isMenuOpen && (
        <div
          style={{
            position: "fixed", // Agora é fixo em relação à janela do navegador
            top: height, // Ajuste isso para a altura do seu cabeçalho
            left: 0,
            right: 0, // Estende da esquerda para a direita
            backgroundColor: "white",
            boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",
            zIndex: 1,
            display: "flex",
            flexDirection: "column", // Os links são dispostos em coluna
          }}
        >
          <a
            href="#"
            style={{
              padding: "12px",
              textDecoration: "none",
              color: "black",
              borderBottom: "1px solid #ccc", // Adiciona uma linha entre os links
            }}
          >
            Link 1
          </a>
          <a
            href="#"
            style={{
              padding: "12px",
              textDecoration: "none",
              color: "black",
              borderBottom: "1px solid #ccc",
            }}
          >
            Link 2
          </a>
          <a
            href="#"
            style={{
              padding: "12px",
              textDecoration: "none",
              color: "black",
            }}
          >
            Link 3
          </a>
        </div>
      )}
    </div>
  );
}
