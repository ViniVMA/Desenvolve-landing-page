import styled from "styled-components/macro";
import HeroWave from "../../../../Public/waves/heroWave.svg";

export const HeroSection = styled.section`
  position: relative;
  min-height: 50vh;
`;

export const Content = styled.div`
  margin: 0 auto;
  max-width: 1300px;
  width: 100%;
`;

export const CardsWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 40px;

  @media (max-width: 768px) {
    gap: 100px;
  }
`;

export const TopContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    margin: 0 10px;
  }
`;

export const TextWrapper = styled.div`
  max-width: 600px;
  font-weight: bold;
  line-height: 3.6rem;
  h2 {
    font-size: 3.6rem;
  }

  p {
    font-size: 1.6rem;
    font-weight: 300;
  }

  a {
    color: #52886d;
    font-size: 1.4rem;
    text-decoration: underline;
  }
`;
