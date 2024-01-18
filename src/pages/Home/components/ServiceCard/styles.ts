import styled from "styled-components";

export const Service = styled.div`
  display: flex;
  width: 50%;
  height: fit-content;
  flex-direction: column;

  padding: 0 10% 0 10%;

  /* box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
  border-radius: 10px; */

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 4em;
  }
`;
