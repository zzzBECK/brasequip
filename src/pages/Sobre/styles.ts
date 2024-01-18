import styled from "styled-components";

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 30em;
  background-color: #fff;
  padding: 0 18vw;

  justify-content: center;
  align-items: center;

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
