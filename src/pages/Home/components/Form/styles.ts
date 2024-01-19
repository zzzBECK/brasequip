import styled from "styled-components";
import theme from "../../../../theme/theme";

export const FormContainer = styled.div`
  display: flex;
  width: 100%;
  min-height: 30em;
  height: 30em;
  background-color: ${theme.colors.darkBlue};

  padding: 0 18vw;

  @media (max-width: 1280px) {
    padding: 0 10vw;
  }

  @media (max-width: 768px) {
    padding: 0 8vw;
    flex-direction: column;
  }

  @media (max-width: 480px) {
    padding: 0 4vw;
  }

  @media (max-width: 340px) {
    padding: 0;
  }
`;

export const Column1 = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  height: 100%;

  @media (max-width: 768px) {
    width: 100%;
    align-items: center;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  gap: 1em;
`;

export const Column2 = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  height: 100%;
`;
