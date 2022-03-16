import styled from "styled-components/macro";

export const HighlightsCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 200px;
  width: 100%;
  padding: 28px;
  background: #ffffff;
  box-shadow: 0px 50px 100px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
  color: #000;

  @media (max-width: 768px) {
    max-width: 100%;
  }

  span {
    font-size: 1.4rem;
  }
`;

export const Title = styled.h4`
  font-size: 2.4rem;
  color: #6c63ff;
`;
