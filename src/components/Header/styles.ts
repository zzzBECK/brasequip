import styled from "styled-components";
import theme from "../../theme/theme";

export const WholeHeader = styled.div`
  display: flex;
  width: 100vw;
  height: 20vh;
  flex-direction: column;
  position: absolute;
`;

export const ContainerHeader = styled.div`
  display: flex;
  width: 100%;
  height: 70%;
  background-color: ${theme.colors.darkBlue};
  padding: 0 18vw;
  justify-content: space-between;

  @media (max-width: 1280px) {
    padding: 0 10vw;
  }

  @media (max-width: 768px) {
    padding: 0 8vw;
  }

  @media (max-width: 480px) {
    padding: 0 4vw;
  }

  @media (max-width: 340px) {
    padding: 0;
  }
`;

export const ContainerSubHeader = styled.div`
  display: flex;
  width: 100%;
  height: 30%;
  padding: 0 18vw;
  background-color: rgba(9, 18, 66, 0.1);

  @media (max-width: 1280px) {
    padding: 0 10vw;
  }

  @media (max-width: 768px) {
    padding: 0 8vw;
  }

  @media (max-width: 480px) {
    padding: 0 4vw;
  }

  @media (max-width: 340px) {
    padding: 0;
  }
`;

interface IColumn {
  width: string;
}

export const Column = styled.div<IColumn>`
  display: flex;
  width: ${({ width }) => width};
  height: 100%;
  align-items: center;
  min-width: 120px;
  justify-content: flex-end;
  overflow: auto;
`;

export const ImageContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  cursor: pointer;
  user-select: none;
`;

export const Image = styled.img`
  display: flex;
  width: 100%;
  height: 100%;
  object-fit: cover;

  background-color: ${theme.colors.blue};
`;

export const ItemContainer = styled.div`
  display: flex;
  width: 33.33%;
  height: 100%;
  justify-content: center;
  align-items: center;
  gap: 4%;
  padding-right: 12px;

  @media (max-width: 768px) {
    width: fit-content;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  min-width: 50px;
  max-width: 72px;
  min-height: 50px;
  max-height: 72px;
  width: 5vw;
  height: 5vw;
  justify-content: center;
  align-items: center;
  user-select: none;
  background-color: ${theme.colors.blue};
  border-radius: 50%;

  /* @media (max-width: 1440px) {
    height: 50%;
  }

  @media (max-width: 1280px) {
    height: 45%;
  }

  @media (max-width: 960px) {
    height: 40%;
  }

  @media (max-height: 768px) {
    height: 60%;
  } */
`;

export const ItemContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 66.66%;
  height: 100%;
  justify-content: center;
  overflow-wrap: break-word;

  @media (max-width: 768px) {
    display: none;
  }
`;
