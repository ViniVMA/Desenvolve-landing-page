import styled from "styled-components/macro";

export const TimelineSection = styled.section`
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

export const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 500px;

  h3 {
    font-size: 3.6rem;
  }

  p {
    font-size: 1.6rem;
  }

  @media (max-width: 768px) {
    margin: 0 10px;
  }
`;

export const RightContent = styled.div`
  @media (max-width: 768px) {
    margin: 0 10px;
  }

  ul,
  li {
    list-style: none;
    padding: 0;
  }

  .wrapper {
    backdrop-filter: blur(16px) saturate(180%);
    -webkit-backdrop-filter: blur(16px) saturate(180%);
    background-color: rgba(255, 255, 255, 0.6);
    border-radius: 12px;
    border: 1px solid rgba(209, 213, 219, 0.3);
    padding: 20px;

    li:nth-child(-n + 5) {
      border-left: 1px solid #6c63ff;
      div,
      p {
        color: #6c63ff;
      }

      &:before {
        border: 1px solid #6c63ff;
        box-shadow: 3px 3px 0px #6c63ff;
      }
    }
  }
  h2 {
    font-size: 2.4rem;
  }
  .sessions {
    margin-top: 2rem;
    border-radius: 12px;
    position: relative;
  }
  li {
    padding-bottom: 1.5rem;
    border-left: 1px solid #000;
    position: relative;
    padding-left: 20px;
    margin-left: 10px;
    &:last-child {
      border: 0px;
      padding-bottom: 0;
    }
    &:before {
      content: "";
      width: 15px;
      height: 15px;
      background: white;
      border: 1px solid #000;
      box-shadow: 3px 3px 0px #000;

      border-radius: 50%;
      position: absolute;
      left: -10px;
      top: 0px;
    }
  }
  .time {
    color: #2a2839;
    font-weight: 500;
    font-size: 2.4rem;
  }
  p {
    color: #4f4f4f;
    line-height: 1.5;
    margin-top: 0.4rem;
    font-size: 1.6rem;
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

export const BottomWave = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  svg {
    position: relative;
    top: 7px;
  }
`;
