import { Column, SubHeaderItem } from "./styles";

export default function SubHeader() {
  const path = new URL(window.location.href).pathname;

  return (
    <>
      <Column width="50%">
        <SubHeaderItem
          borderRight="true"
          borderHeight="30%"
          borderBottom={path === "/brasequip/"}
        >
          <p>Página inicial</p>
        </SubHeaderItem>

        <SubHeaderItem
          borderRight={"true"}
          borderHeight="30%"
          borderBottom={false}
        >
          <p>Sobre nós</p>
        </SubHeaderItem>
        <SubHeaderItem
          borderRight={"true"}
          borderHeight="30%"
          borderBottom={false}
        >
          <p>Serviços</p>
        </SubHeaderItem>
        <SubHeaderItem
          borderRight={"false"}
          borderHeight="30%"
          borderBottom={false}
        >
          <p>Contato</p>
        </SubHeaderItem>
      </Column>
      <Column width="50%"></Column>
    </>
  );
}
