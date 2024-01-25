import styled from "styled-components";

export const ButtonStyle = styled.button`
  display: flex;
  width: 12rem;
  height: 4rem;
  background-color: #c71e23;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s;
  color: #fff;

  justify-content: center;
  align-items: center;

  &:disabled {
    opacity: 0.8;
    cursor: not-allowed; // Change cursor to indicate it's not clickable
  }
`;
