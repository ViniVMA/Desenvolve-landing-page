import styled from "styled-components/macro";

export const CuriosidadesSection = styled.section`
  position: relative;
  min-height: 50vh;
  padding-bottom: 200px;
`;

export const Content = styled.div`
  margin: 0 auto;
  max-width: 1300px;
  width: 100%;
`;

export const CarouselWrapper = styled.div`
  margin-top: 30px;
  swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;

    @media screen and (min-width: 320px) {
      .mySwiper {
        width: 320px;
      }
    }

    @media screen and (min-width: 640px) {
      .mySwiper {
        width: 640px;
      }
    }

    @media screen and (min-width: 768px) {
      .mySwiper {
        width: 768px;
      }
    }
  }
`;

export const TopContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    margin: 0 10px;
  }
`;

export const TextWrapper = styled.div`
  max-width: 600px;
  font-weight: bold;
  line-height: 3.6rem;
  h2 {
    font-size: 3.6rem;
  }

  p {
    font-size: 1.6rem;
    font-weight: 300;
  }

  a {
    color: #52886d;
    font-size: 1.4rem;
    text-decoration: underline;
  }
`;

export const Warn = styled.div`
  margin-top: 30px;
  font-size: 1.6rem;
`;
