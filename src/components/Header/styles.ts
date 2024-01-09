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
`;

export const ContainerSubHeader = styled.div`
  display: flex;
  width: 100%;
  height: 30%;
  padding: 0 18vw;
  background-color: rgba(9, 18, 66, 0.1);
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
  max-width: 72px;
  min-width: 50px;
  width: 5vw;
  height: 55%;
  justify-content: center;
  align-items: center;
  user-select: none;
  background-color: ${theme.colors.blue};
  border-radius: 50%;

  @media (max-width: 1440px) {
    height: 50%;
  }

  @media (max-width: 1280px) {
    height: 45%;
  }

  @media (max-width: 960px) {
    height: 40%;
  }
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

interface ISubHeaderItem {
  border?: boolean;
}

export const SubHeaderItem = styled.div<ISubHeaderItem>`
  display: flex;
  width: 25%;
  height: 30%;
  border-right: ${({ border }) => (border ? "1px solid white" : "none")};
  justify-content: center;
  align-items: center;
  cursor: pointer;
  user-select: none;
`;
