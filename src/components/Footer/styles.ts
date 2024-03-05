import styled from "styled-components";
import theme from "../../theme/theme";

export const Container = styled.footer`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${theme.colors.darkBlue};
`;

export const Row = styled.div`
  display: flex;
  width: 100%;
  height: 6em;
  background-color: ${theme.colors.blue};

  gap: 4%;
`;

export const LogoContainer = styled.div`
  display: flex;
  width: 30%;
  min-width: 176px;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.darkBlue};
`;

export const Image = styled.img`
  width: 60%;
  object-fit: cover;

  min-width: 200px;
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  min-height: 70%;
  background-color: ${theme.colors.darkBlue};

  @media (max-width: 910px) {
    flex-direction: column;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 33%;
  min-height: 100%;
  gap: 1%;
  padding: 2em 0;

  @media (max-width: 910px) {
    width: 100%;
    align-items: flex-start;

    border-bottom: 1px solid ${theme.colors.blue};
  }
`;

export const ItemCoitainer = styled.div`
  display: flex;
  width: 100%;
  gap: 1em;
  align-items: center;
  font-size: clamp(0.8rem, 1vw, 1rem);
`;

export const ItemContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 4%;
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
  border: 1px solid #ff2222;
  border-radius: 50%;
`;

export const ItemContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 66.66%;
  height: 100%;
  justify-content: center;
  overflow-wrap: break-word;
`;

export const RoutesContainer = styled.div`
  display: flex;
  width: 40%;
  height: 100%;
  flex-direction: column;
  font-size: clamp(0.8rem, 0.8vw, 1em);
  align-items: flex-end;

  @media (max-width: 910px) {
    align-items: flex-start;
  }
`;
