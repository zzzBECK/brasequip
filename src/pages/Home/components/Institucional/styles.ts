import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 70em;
  min-height: 100vh;
  position: relative;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
`;

export const Image = styled.div`
  display: flex;
  width: 100%;
  height: 40em;
  background-image: url("institucionalImage.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-position-y: 40%;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 50em;
  min-height: 30em;
  position: absolute;
  padding: 0 18vw;
  z-index: 10;
  background-color: transparent;

  top: 16em;

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

export const Content = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
  padding: 6vw;
  gap: 6%;

  @media (max-width: 1100px) {
    flex-direction: column;
  }
`;

export const Column1 = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;
  gap: 1em;
  text-align: justify;
  justify-content: center;

  @media (max-width: 1100px) {
    width: 100%;
    height: 50%;
  }

  @media (max-width: 768px) {
    height: fit-content;

    justify-content: flex-start;
  }
`;

export const Column2 = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;

  @media (max-width: 1100px) {
    width: 100%;
    height: 50%;
  }

  @media (max-width: 768px) {
    height: 30%;
  }
`;

export const ImagemColuna2 = styled.div`
  display: flex;
  height: 100%;
  background-image: url("Grua.jpg");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  min-width: 200px;
  max-width: 100%;
`;
