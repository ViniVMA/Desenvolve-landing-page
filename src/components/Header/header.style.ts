import styled from "styled-components/macro";

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  top: 0;
  position: fixed;
  z-index: 9999;
  width: 100%;
  height: 100px;
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  background-color: rgba(255, 255, 255, 0.44);

  border: 1px solid rgba(209, 213, 219, 0.3);
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
