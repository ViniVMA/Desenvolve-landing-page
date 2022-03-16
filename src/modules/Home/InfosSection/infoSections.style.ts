import styled from "styled-components/macro";

export const InfoSection = styled.section`
  position: relative;
  min-height: 100vh;
  background: linear-gradient(174.48deg, #a9cb7a -12.41%, #499d71 88.56%);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const Content = styled.div`
  margin: 0 auto;
  max-width: 1300px;
  width: 100%;
  height: 100%;
  padding-top: 300px;
  gap: 40px;
  justify-content: center;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding-top: 100px;
  }

  .TopContent {
    display: flex;
    gap: 100px;

    h3 {
      font-size: 2.4rem;
    }

    @media (max-width: 768px) {
      flex-direction: column;
      padding-top: 150px;
      gap: 20px;
      margin: 0 10px;
    }
  }

  .BottomContent {
    display: flex;
    gap: 100px;
    font-size: 1.6rem;

    .logoWrapper {
      max-width: 205px;
      height: 100px;
    }

    h3 {
      font-size: 1.8rem;
    }

    p {
      max-width: 700px;
    }
    @media (max-width: 768px) {
      flex-direction: column;
      gap: 50px;
      margin: 0 10px;
    }
  }
`;

export const Wave = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  svg {
    position: relative;
  }
`;

export const CardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
`;

export const BottomWave = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  svg {
    position: relative;
    top: 7px;
  }
`;

export const Manifesto = styled.div`
  color: #6c63ff;
  font-size: 2.4rem;
  max-width: 700px;
`;

export const ImageWrapper = styled.div`
  max-width: 300px;
  margin: 0 auto;
`;
