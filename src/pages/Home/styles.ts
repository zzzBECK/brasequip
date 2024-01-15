import styled from "styled-components";

export const WholePage = styled.div`
  display: flex;
  width: 100vw;
  min-height: 100vh;
  min-height: 100svh;
  flex-direction: column;
  overflow-y: scroll;
`;

export const Image = styled.div`
  display: flex;
  width: 100%;
  height: 70vh;
  background-image: url("homeImage.jpg");
  background-size: cover;
  background-position-y: 20%;
  position: relative;

  @media (max-width: 580px) {
    height: 100vh;
  }
`;

export const ImageOverlay = styled.div`
  display: none;
  position: absolute;
  top: 0; // Ensures it starts from the very top of the Image container
  left: 0; // Ensures it starts from the very left of the Image container
  width: 100%; // Takes the full width of the Image container
  height: 100%; // Takes the full height of the Image container
  background-color: rgba(0, 0, 0, 0.5); // Adjust the opacity as needed
  /* background-color: red; */
  z-index: 3; // Higher than the image but lower than the text

  @media (max-width: 1280px) {
    display: flex;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 70vh;
  position: relative;
  overflow-x: hidden;

  @media (max-width: 580px) {
    min-height: 100vh;
  }
`;

export const TextPosition = styled.div`
  display: flex;
  width: 36%; // Width as a percentage works well for responsiveness
  position: absolute;
  right: 8%; // Use percentages to position from the right
  top: 72%;
  transform: translateY(-50%); // Adjust vertically by half its own height
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  z-index: 3; // Higher than the overlay

  color: #fff; // Or another color that contrasts well with your overlay
  text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);

  @media (max-width: 1532px) {
    // Adjust for smaller screens
    width: 45%; // Increase the width on smaller screens
  }

  @media (max-width: 1280px) {
    // Adjust for smaller screens
    width: 50%; // Increase the width on smaller screens
    top: 65%;
  }

  @media (max-width: 1100px) {
    width: 60%; // Increase the width on smaller screens
    align-items: center;
    justify-content: center;
    text-align: center;
    right: 0;
    width: 100%;
    top: 60%;
  }

  @media (max-width: 1100px) {
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
`;
