import styled from "styled-components";
import theme from "../../theme/theme";

export const ContainerHeader = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
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
  position: relative;
  height: 100%;
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
  /* max-width: 72px; */
  min-height: 50px;
  /* max-height: 72px; */
  width: 4vw;
  height: 4vw;
  justify-content: center;
  align-items: center;
  user-select: none;
  /* background-color: ${theme.colors.blue}; */
  border: 2px solid #ff2222;
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
