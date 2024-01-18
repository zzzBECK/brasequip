import { Column, SubHeaderItem } from "./styles";

export default function SubHeader() {
  const path = new URL(window.location.href).pathname;

  const handeClick = (path: string) => () => {
    window.location.href = `/brasequip/${path}`;
  };

  return (
    <>
      <Column width="50%">
        <SubHeaderItem
          borderRight="true"
          borderHeight="30%"
          onClick={handeClick("")}
        >
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

        <SubHeaderItem
          borderRight={"true"}
          borderHeight="30%"
          onClick={handeClick("sobre")}
        >
          <p
            style={{
              borderBottom:
                path === "/brasequip/sobre" ? "1px solid white" : "none",
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
