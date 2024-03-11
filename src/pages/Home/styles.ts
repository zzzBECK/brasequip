import styled from "styled-components";

export const ServicesContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: fit-content;
  background-color: #fff;
  gap: 4em;
  padding-top: 4em;
  padding-bottom: 4em;
`;

export const ServicesRow = styled.div`
  display: flex;
  width: 100%;
  height: auto;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
