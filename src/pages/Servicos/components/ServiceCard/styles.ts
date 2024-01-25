import styled from "styled-components";
import theme from "../../../../theme/theme";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 30em;
  width: 18em;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
  justify-content: flex-end;

  transition: 0.4s;
  position: relative;
  color: ${theme.colors.white};

  &:hover {
    cursor: pointer;
    transform: scale(1.025);
  }

  @media (max-width: 800px) {
    height: 20em;
    width: 15em;
  }
`;

export const ImageOverlay = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: rgba(29, 37, 81, 0.6);
  display: flex;
`;
