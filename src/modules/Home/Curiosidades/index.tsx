import { Swiper, SwiperSlide } from "swiper/react";
import { Button } from "components/Button";
import * as S from "./curiosidades.style";
import { Mousewheel, Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { InfoCard } from "components/InfoCards";

const Cards = [
  {
    description:
      "Estima-se que, no Brasil, mulheres são 51,8% da população. Porém, na tecnologia, elas são apenas 31,5%..",
    img: "/infoCards/engineer.svg",
  },
  {
    description:
      "Quando falamos em cor e raça, pessoas pretas e pardas são 56,2% do Brasil. Em tech, apenas 36,9%",
    img: "/infoCards/keyPoints.svg",
  },
  {
    description:
      "Em 2018, o gap de profissionais de TI no Brasil já chegava a 200 mil profissionais. São 200 mil vagas de emprego sem gente capacitada para ocupar!",
    img: "/infoCards/goingUp.svg",
  },
  {
    description:
      "Mais de 60% dos profissionais de tecnologia recebem mais de 5 salários mínimos. No país, a média de remuneração de ocupados é pouco acima de 2 salários.",
    img: "/infoCards/money.svg",
  },
];

export const CuriosidadesSection = () => {
  return (
    <S.CuriosidadesSection>
      <S.Content>
        <S.TopContentWrapper>
          <S.TextWrapper>
            <h2>Você sabia...</h2>
          </S.TextWrapper>
          <Button text="Lista Das Pessoas Selecionadas" />
        </S.TopContentWrapper>
        <S.CarouselWrapper>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            mousewheel={true}
            navigation={true}
            pagination={{
              clickable: true,
            }}
            modules={[Mousewheel, Pagination, Navigation]}
            className="mySwiper"
            breakpoints={{
              // when window width is >= 320px
              320: {
                slidesPerView: 1,
                spaceBetween: 5,
              },
              // when window width is >= 425px
              425: {
                slidesPerView: 2,
                spaceBetween: 5,
              },

              // when window width is >= 640px
              640: {
                slidesPerView: 3,
                spaceBetween: 5,
              },
              // when window width is >= 768px
              900: {
                slidesPerView: 4,
                spaceBetween: 5,
              },
            }}
          >
            {Cards.map(({ description, img }) => (
              <SwiperSlide>
                <InfoCard description={description} img={img} />
              </SwiperSlide>
            ))}
          </Swiper>
        </S.CarouselWrapper>
        <S.Warn>
          Fontes: IBGE, PNAD Contínua, 2019. #QuemCodaBR, 2017. IstoÉ Dinheiro,
          2019.
        </S.Warn>
      </S.Content>
    </S.CuriosidadesSection>
  );
};
