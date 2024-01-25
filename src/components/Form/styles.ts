import styled from "styled-components";
import theme from "../../theme/theme";

export const FormContainer = styled.div`
  display: flex;
  width: 100%;
  min-height: 30em;
  height: 30em;
  background-color: ${theme.colors.darkBlue};

  padding: 0 18vw;
  padding-top: 2em;

  @media (max-width: 1280px) {
    padding: 0 10vw;
    padding-top: 2em;
  }

  @media (max-width: 768px) {
    padding: 0 8vw;
    flex-direction: column;
    padding-top: 2em;
    height: 45em;
  }

  @media (max-width: 480px) {
    padding: 0 4vw;
    padding-top: 2em;
  }

  @media (max-width: 340px) {
    padding: 0;
    padding-top: 2em;
  }
`;

export const Column1 = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  height: 100%;

  @media (max-width: 768px) {
    width: 100%;
    height: 30%;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 1em;
`;

export const Column2 = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  height: 100%;

  @media (max-width: 768px) {
    width: 100%;
    height: 70%;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 4em;
  border: 1px solid rgba(255, 255, 255, 0.5);
  background-color: transparent;
  color: white;
  outline: none;
  padding: 0 1em;

  margin-bottom: 1em;
`;

export const TextArea = styled.textarea`
  width: 100%;
  min-height: 8em;
  border: 1px solid rgba(255, 255, 255, 0.5);
  background-color: transparent;
  color: white;
  outline: none;
  padding: 1em 1em;

  min-width: 100%;
  max-width: 100%;

  max-height: 10em;

  margin-bottom: 1em;
`;

export const ButtonContainer = styled.div`
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
