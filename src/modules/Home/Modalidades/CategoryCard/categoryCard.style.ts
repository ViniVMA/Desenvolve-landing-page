import styled from "styled-components/macro";

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 350px;
  box-shadow: 0px 50px 100px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
  padding: 24px;
`;
export const Avaliable = styled.div`
  background-color: #1b8700;
  color: #fff;
  font-size: 1.2rem;
  width: fit-content;
  border-radius: 30px;
  padding: 5px;
`;

export const Title = styled.h3`
  font-size: 3.6rem;
  background: -webkit-linear-gradient(#281ac8, #fd749b);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
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
    background: -webkit-linear-gradient(#281ac8, #fd749b);
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
  color: #fd749b;
  font-size: 1.4rem;
  text-decoration: underline;
`;
