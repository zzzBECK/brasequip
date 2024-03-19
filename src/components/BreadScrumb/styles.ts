import styled from "styled-components";
import theme from "../../theme/theme";

export const BreadContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
  font-size: clamp(0.8rem, 1.5vw, 1.2rem);
  font-weight: 500;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.darkBlue};
  padding: 0.3em;
  padding-left: 0.6em;
  border-radius: 10px;
`;

interface IBreadItem {
  isThereHover?: boolean;
}

export const BreadItem = styled.div<IBreadItem>`
  display: flex;
  align-items: center;
  transition: 0.3s;
  border: none;

  cursor: ${({ isThereHover }) => (isThereHover ? "pointer" : "")};

  :hover {
    color: ${({ isThereHover }) =>
      isThereHover ? theme.colors.red : theme.colors.darkBlue};
  }
`;
