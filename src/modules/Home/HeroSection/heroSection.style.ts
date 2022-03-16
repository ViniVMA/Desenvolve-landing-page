import styled from "styled-components/macro";
import HeroWave from "../../../../Public/waves/heroWave.svg";

export const HeroSection = styled.section`
  position: relative;
  min-height: 100vh;
  background: linear-gradient(174.48deg, #fd749b -12.41%, #281ac8 88.56%);
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const Content = styled.div`
  margin: 0 auto;
  max-width: 1300px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 100%;
  padding-bottom: 150px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Illustration = styled.div`
  max-width: 500px;
`;

export const HeroText = styled.div`
  max-width: 600px;
  color: #fff;

  h3 {
    font-size: 9.9rem;

    @media (max-width: 1200px) {
      font-size: 8.2rem;
    }

    @media (max-width: 500px) {
      font-size: 5.2rem;
    }
  }

  p {
    font-size: 2.4rem;
    font-weight: 100;

    span {
      font-weight: 300;
    }
  }
`;

export const Wave = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  svg {
    position: relative;
    top: 7px;
  }
`;
