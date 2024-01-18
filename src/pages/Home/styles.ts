import styled from "styled-components";

export const ServicesContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 60vh;
  background-color: #fff;
  padding: 0 18vw;

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

export const ServicesRow = styled.div`
  display: flex;
  width: 100%;
  height: 50%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Service = styled.div`
  display: flex;
  width: 50%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
  }
`;
