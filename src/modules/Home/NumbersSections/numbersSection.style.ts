import styled from "styled-components/macro";

export const NumbersSection = styled.section`
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
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding-bottom: 150px;
  gap: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding-top: 100px;
  }
`;

export const ImageWrapper = styled.div`
  max-width: 300px;
`;

export const RightContent = styled.div`
  max-width: 690px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  font-size: 1.6rem;
  color: #fff;

  h3 {
    font-size: 3.6rem;
    font-weight: 500;
    border-bottom: 2px solid #6c63ff;
  }

  .bottomText {
    font-size: 1.4rem;
    p {
      margin-bottom: 20px;
    }

    a {
      color: #6c63ff;
      text-decoration: underline;
    }
  }

  @media (max-width: 768px) {
    margin: 0 10px;
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
