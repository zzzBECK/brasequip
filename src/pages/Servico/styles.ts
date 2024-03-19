import styled from "styled-components";

export const Image = styled.div`
  display: flex;
  width: 100%;
  height: 20em;
  background-image: url("servico.jpeg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 20em;
  position: relative;
`;

export const TextPosition = styled.div`
  display: flex;
  position: absolute;
  max-width: 80%; // Adjust the width to your preference
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
    justify-content: center;
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

export const BackgroundDark = styled.div`
  display: none;
  position: absolute;
  top: 0; // Ensures it starts from the very top of the Image container
  left: 0; // Ensures it starts from the very left of the Image container
  width: 100%; // Takes the full width of the Image container
  height: 100%; // Takes the full height of the Image container
  background-color: rgba(0, 0, 0, 0.5); // Adjust the opacity as needed
  /* background-color: red; */
  z-index: 2; // Higher than the image but lower than the text

  @media (max-width: 1280px) {
    display: flex;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 42em;
  padding-top: 2em;
  padding-bottom: 4em;
  gap: 2em;
`;
