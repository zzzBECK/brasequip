import styled from "styled-components";

export const ServicesContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: fit-content;
  min-height: 60em;
  background-color: #fff;
  padding: 0 18vw;
  gap: 4em;

  @media (max-width: 1280px) {
    padding: 0 10vw;
  }

  @media (max-width: 768px) {
    padding: 0 8vw;
    gap: 0;
  }

  @media (max-width: 480px) {
    padding: 0 4vw;
  }

  @media (max-width: 340px) {
    padding: 0;
  }
`;

export const ServicesRow = styled.div`
  display: flex;
  width: 100%;
  height: auto;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
