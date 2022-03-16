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

  @media (max-width: 768px) {
    /* flex-direction: column;
    align-items: center; */
  }
`;

export const CardsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
`;
