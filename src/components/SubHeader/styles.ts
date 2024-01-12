import styled from "styled-components";

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

interface ISubHeaderItem {
  borderRight: string;
  borderHeight: string;
}

export const SubHeaderItem = styled.div<ISubHeaderItem>`
  display: flex;
  width: 25%;
  height: 100%;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  user-select: none;
  position: relative; // Needed for absolute positioning of the pseudo-element

  &::after {
    content: "";
    position: absolute;
    right: 0;
    top: 50%; // Start at 50% from the top
    transform: translateY(-50%); // This will center the border vertically
    width: ${({ borderRight }) => (borderRight === "true" ? "1px" : "0")};
    height: ${({ borderHeight }) =>
      borderHeight || "50%"}; // Default to 50% or use the provided height
    background-color: rgba(
      255,
      255,
      255,
      0.2
    ); // Set the white color with 50% opacity
    display: ${({ borderRight }) =>
      borderRight === "true" ? "block" : "none"};
  }
`;
