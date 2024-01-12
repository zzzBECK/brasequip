import { Column, SubHeaderItem } from "./styles";

export default function SubHeader() {
  const path = new URL(window.location.href).pathname;

  return (
    <>
      <Column width="50%">
        <SubHeaderItem borderRight="true" borderHeight="30%">
          <p
            style={{
              borderBottom: path === "/brasequip/" ? "1px solid white" : "none",
              height: "100%",
              alignItems: "center",
              display: "flex",
            }}
          >
            Página inicial
          </p>
        </SubHeaderItem>

        <SubHeaderItem borderRight={"true"} borderHeight="30%">
          <p
            style={{
              borderBottom: path === "//" ? "1px solid white" : "none",
              height: "100%",
              alignItems: "center",
              display: "flex",
            }}
          >
            Sobre nós
          </p>
        </SubHeaderItem>
        <SubHeaderItem borderRight={"true"} borderHeight="30%">
          <p
            style={{
              borderBottom: path === "//" ? "1px solid white" : "none",
              height: "100%",
              alignItems: "center",
              display: "flex",
            }}
          >
            Serviços
          </p>
        </SubHeaderItem>
        <SubHeaderItem borderRight={"false"} borderHeight="30%">
          <p
            style={{
              borderBottom: path === "//" ? "1px solid white" : "none",
              height: "100%",
              alignItems: "center",
              display: "flex",
            }}
          >
            Contato
          </p>
        </SubHeaderItem>
      </Column>
      <Column width="50%"></Column>
    </>
  );
}
