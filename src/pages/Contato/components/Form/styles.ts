import styled from "styled-components";
import theme from "../../../../theme/theme";

export const FormContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: ${theme.colors.darkBlue};
  flex-direction: column;
  padding: 4em 0;
  gap: 2em;
`;

export const Column1 = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  padding: 0 2em;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 1em;
  align-items: center;
`;

export const Column2 = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
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
  display: flex;
  justify-content: center;
  align-items: center;
`;
