import styled from "styled-components/macro";

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #ffffff;
  border: 1px solid #00000020;
  border-radius: 30px;
  max-width: 272px;
  height: 380px;
  padding: 24px;
`;

export const Content = styled.div`
  font-size: 1.6rem;
  flex: 1;
`;

export const ImageWrapper = styled.div`
  flex: 1;
  max-width: 230px;
  width: 100%;
  display: flex;
  align-items: end;
  justify-content: center;
  img {
    width: 100%;
  }
`;
