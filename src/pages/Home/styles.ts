import styled from "styled-components";

export const WholePage = styled.div`
  display: flex;
  width: 100vw;
  min-height: 100vh;
  min-height: 100svh;
  flex-direction: column;
  overflow-y: scroll;
`;

export const ImageContainer = styled.div`
  display: flex;
  width: 100%;
  height: 60vh;
  background-image: url("homeImage.jpg");
  background-size: cover;
  background-position-y: 20%;
`;
