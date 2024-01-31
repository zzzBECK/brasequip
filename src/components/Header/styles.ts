import styled from "styled-components";
import theme from "../../theme/theme";

export const WholeHeader = styled.div`
  display: flex;
  width: 100vw;
  max-width: 100%;
  height: 12em;
  flex-direction: column;
  position: absolute;
  z-index: 4;
`;

export const ContainerHeader = styled.div`
  display: flex;
  width: 100%;
  height: 70%;
  background-color: ${theme.colors.darkBlue};
  justify-content: space-between;
`;

export const ContainerSubHeader = styled.div`
  display: flex;
  width: 100%;
  height: 30%;
  background-color: rgba(9, 18, 66, 0.1);
`;

interface IColumn {
  width: string;
  justifyContent?: string;
}

export const Column = styled.div<IColumn>`
  display: flex;
  width: ${({ width }) => width};
  align-items: center;
  justify-content: ${({ justifyContent }) => justifyContent || "flex-end"};
  padding-left: ${({ justifyContent }) =>
    justifyContent == null ? null : "1.6vw"};
  min-width: 140px;
  position: relative;
  height: 100%;
`;

export const ImageContainer = styled.div`
  display: flex;
  height: 90%;
  width: auto;
  border-radius: 50%;
  background-color: ${theme.colors.blue};
  cursor: pointer;
  user-select: none;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  scale: 1.4;
  user-select: none;
`;

export const ItemContainer = styled.div`
  display: flex;
  width: 33.33%;
  height: 100%;
  justify-content: flex-end;
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
