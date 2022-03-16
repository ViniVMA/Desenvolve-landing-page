import styled from "styled-components/macro";

export const Wrapper = styled.div`
  .scroll {
    backdrop-filter: blur(16px) saturate(180%);
    -webkit-backdrop-filter: blur(16px) saturate(180%);
    background-color: rgba(255, 255, 255, 0.44);
    border: 1px solid rgba(209, 213, 219, 0.3);
    -webkit-animation: swing-in-top-fwd 0.5s
      cubic-bezier(0.175, 0.885, 0.32, 1.275) both;
    animation: swing-in-top-fwd 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)
      both;
  }

  @-webkit-keyframes swing-in-top-fwd {
    0% {
      -webkit-transform: rotateX(-100deg);
      transform: rotateX(-100deg);
      -webkit-transform-origin: top;
      transform-origin: top;
      opacity: 0;
    }
    100% {
      -webkit-transform: rotateX(0deg);
      transform: rotateX(0deg);
      -webkit-transform-origin: top;
      transform-origin: top;
      opacity: 1;
    }
  }
  @keyframes swing-in-top-fwd {
    0% {
      -webkit-transform: rotateX(-100deg);
      transform: rotateX(-100deg);
      -webkit-transform-origin: top;
      transform-origin: top;
      opacity: 0;
    }
    100% {
      -webkit-transform: rotateX(0deg);
      transform: rotateX(0deg);
      -webkit-transform-origin: top;
      transform-origin: top;
      opacity: 1;
    }
  }
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  top: 0;
  position: fixed;
  z-index: 9999;
  width: 100%;
  height: 100px;
`;

export const HeaderContent = styled.div`
  margin: 0 auto;
  max-width: 1300px;
  width: 100%;
`;

export const LogoWrapper = styled.div`
  max-width: 150px;
  width: 100%;
`;
