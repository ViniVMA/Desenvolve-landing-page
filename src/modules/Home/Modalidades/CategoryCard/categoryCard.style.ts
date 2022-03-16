import styled from "styled-components/macro";

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 350px;
  box-shadow: 0px 50px 100px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
  padding: 24px;

  @media (max-width: 768px) {
    max-width: 100%;
    margin: 0 10px;
  }
`;
export const Avaliable = styled.div`
  background-color: #52886d;
  color: #fff;
  font-size: 1.2rem;
  width: fit-content;
  border-radius: 30px;
  padding: 5px;
`;

export const ImageWrapper = styled.div`
  max-height: 220px;
  img {
    height: 100%;
    width: 100%;
  }
`;

export const Title = styled.h3`
  font-size: 3.6rem;
  color: #6c63ff;
`;

export const Description = styled.p`
  font-size: 1.4rem;
  line-height: 2.4rem;
  flex: 1;
`;

export const InfosCard = styled.div`
  width: 100%;
  margin-bottom: 10px;

  hr {
    border: none;
    height: 2px;
    background: #6c63ff;
  }
  span {
    font-size: 1.6rem;
  }
`;

export const Infos = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;

export const Link = styled.a`
  color: #52886d;
  font-size: 1.4rem;
  text-decoration: underline;
`;
