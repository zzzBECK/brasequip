import styled from "styled-components";
import theme from "../../theme/theme";

export const WholeHeader = styled.div`
  display: flex;
  width: 100vw;
  height: 20vh;
  flex-direction: column;
  position: absolute;
`;

export const ContainerHader = styled.div`
  display: flex;
  width: 100%;
  height: 70%;
  background-color: ${theme.colors.darkBlue};
  padding: 0 18vw;
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
  justify-content: space-between;
  align-items: center;
`;

export const ImageContainer = styled.div`
  display: flex;
  width: 30%;
  height: 100%;
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
  flex-direction: column;
  justify-content: center;
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
`;
