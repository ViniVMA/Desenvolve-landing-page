import styled from "styled-components/macro";

export const LinksSection = styled.section`
  position: relative;
`;

export const Content = styled.div`
  margin: 0 auto;
  max-width: 1500px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  padding: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const CardWrapper = styled.div`
  max-width: 650px;

  button {
    margin-top: 48px;
  }
`;

export const Title = styled.h3`
  font-size: 3.6rem;
`;

export const Description = styled.p`
  font-size: 1.6rem;
`;

export const Separator = styled.div`
  flex: 1;
  height: 150px;
  max-width: 2px;
  width: 100%;
  border-radius: 20px;
  background-color: #499d71;
`;
