import styled from "styled-components";

export const WholePage = styled.div`
  display: flex;
  width: 100vw;
  min-height: 100vh;
  min-height: 100svh;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
`;

export const Image = styled.div`
  display: flex;
  width: 100%;
  height: 40em;
  background-image: url("homeImage.jpg");
  background-size: cover;
  background-position-y: 20%;
  position: relative;

  @media (max-width: 620px) {
    height: 100vh;
    height: 100svh;
    min-height: 40em;
  }

  @media (max-height: 700px) {
    min-height: 40em;
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
  min-height: 40em;
  position: relative;

  @media (max-width: 620px) {
    height: 100vh;
    height: 100svh;
    min-height: 45em;
  }

  @media (max-height: 700px) {
    min-height: 40em;
  }
`;

export const TextPosition = styled.div`
  align-items: center;
  display: flex;
  width: 50%; // Width as a percentage works well for responsiveness
  position: absolute;
  right: 8%; // Use percentages to position from the right
  top: 55%;
  transform: translateY(-50%); // Adjust vertically by half its own height
  flex-direction: column;
  justify-content: space-between;
  gap: 1.2rem;
  z-index: 3; // Higher than the overlay

  color: #fff; // Or another color that contrasts well with your overlay
  text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);

  @media (max-width: 1280px) {
    // Adjust for smaller screens
    width: 50%; // Increase the width on smaller screens
    top: 55%;
  }

  @media (max-width: 1100px) {
    width: 60%; // Increase the width on smaller screens
    align-items: center;
    justify-content: center;
    text-align: center;
    right: 0;
    width: 100%;
    top: 50%;
  }

  @media (max-width: 1100px) {
    padding: 0 10vw;
  }

  @media (max-width: 768px) {
    padding: 0 8vw;
  }

  @media (max-width: 480px) {
    padding: 0 4vw;
    top: 50%;
  }

  @media (max-width: 340px) {
    padding: 0;
  }
`;
