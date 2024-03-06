import styled from "styled-components";
import theme from "../../theme/theme";

export const Image = styled.div`
  display: flex;
  width: 100%;
  height: 24em;
  background-image: url("aguasclaras.jpeg");
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  background-position-y: -30em;

  @media (max-width: 620px) {
    height: 100vh;
    height: 100svh;
    min-height: 45em;
  }

  @media (max-height: 700px) {
    min-height: 24em;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 24em;
  position: relative;

  @media (max-width: 620px) {
    height: 100vh;
    height: 100svh;
    min-height: 45em;
  }

  @media (max-height: 700px) {
    min-height: 24em;
  }
`;

export const TextPosition = styled.div`
  display: flex;
  width: 36%; // Width as a percentage works well for responsiveness
  position: absolute;
  left: 14%; // Use percentages to position from the right
  top: 60%;
  transform: translateY(-50%); // Adjust vertically by half its own height
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  z-index: 3; // Higher than the overlay

  color: #fff; // Or another color that contrasts well with your overlay
  text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);

  @media (max-width: 1100px) {
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    left: 0;
    top: 50%;
  }

  @media (max-width: 620px) {
    justify-content: start;
    padding-top: 18em;
    top: 60%;
  }
`;

export const ImageOverlay = styled.div`
  display: flex;
  position: absolute;
  top: 0; // Ensures it starts from the very top of the Image container
  left: 0; // Ensures it starts from the very left of the Image container
  width: 100%; // Takes the full width of the Image container
  height: 100%; // Takes the full height of the Image container
  background: linear-gradient(
    to right,
    rgba(3, 45, 95, 1) 0%,
    rgba(3, 45, 95, 1) 10%,
    rgba(3, 45, 95, 0.8) 20%,
    rgba(0, 0, 0, 0) 100%
  ); // Gradient effect
  z-index: 3; // Higher than the image but lower than the text

  @media (max-width: 1100px) {
    background: linear-gradient(
      to top,
      rgba(3, 45, 95, 1) 0%,
      rgba(0, 0, 0, 0) 100%
    ); // Gradient effect
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${theme.colors.white};
  min-height: 40em;
  padding-top: 2em;
  padding-bottom: 4em;
  color: ${theme.colors.black};
  gap: 2em;
`;
