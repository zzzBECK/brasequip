import styled from "styled-components";

export const WholePage = styled.div`
  display: flex;
  width: 100vw;
  min-height: 100vh;
  min-height: 100svh;
  flex-direction: column;
  overflow-y: scroll;
`;

export const Image = styled.div`
  display: flex;
  width: 100%;
  height: 60vh;
  background-image: url("homeImage.jpg");
  background-size: cover;
  background-position-y: 20%;
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 60vh;
  position: relative;
  overflow-x: hidden;
`;

export const Teste = styled.div`
  display: flex;
  width: 36%;
  height: 40%;
  position: absolute;
  right: 8%;
  top: 48%;
  flex-direction: column;
`;
