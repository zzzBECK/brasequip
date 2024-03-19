import styled from "styled-components";

export const ServicesContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: fit-content;
  gap: 4em;
  padding-top: 4em;
  padding-bottom: 4em;

  /* Use the theme provided by the ThemeProvider */
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};

  @media (max-width: 768px) {
    gap: 0;
  }
`;

export const ServicesRow = styled.div`
  display: flex;
  width: 100%;
  height: auto;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Title = styled.h1`
  @media (max-width: 768px) {
    margin-bottom: 2em;
  }
`;
