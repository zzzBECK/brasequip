import styled from "styled-components";
import theme from "../../theme/theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 30em;
  height: 30em;
  background-color: ${theme.colors.darkBlue};
`;

export const Row = styled.div`
  display: flex;
  width: 100%;
  height: 20%;
  background-color: ${theme.colors.blue};

  gap: 4%;
`;

export const LogoContainer = styled.div`
  display: flex;
  width: 30%;
  min-width: 176px;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.darkBlue};
`;

export const Image = styled.img`
  width: 60%;
  object-fit: cover;

  min-width: 200px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 70%;
  background-color: ${theme.colors.darkBlue};
`;

export const Column1 = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  min-width: 176px;
  height: 100%;
  gap: 1%;
  padding-top: 2em;
  align-items: center;
`;
