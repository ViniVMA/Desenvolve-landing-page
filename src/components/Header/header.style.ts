import styled from "styled-components/macro";

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  top: 0;
  position: fixed;
  z-index: 1;
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
