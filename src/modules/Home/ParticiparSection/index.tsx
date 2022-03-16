import { Swiper, SwiperSlide } from "swiper/react";
import { Button } from "components/Button";
import * as S from "./participar.style";
import { Mousewheel, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import { InfoCard } from "components/InfoCards";

const Cards = [
  {
    description:
      "Ter concluído o Ensino médio e ter 18 anos completos até dezembro de 2021.",
    img: "/infoCards/student.svg",
  },
  {
    description: "Pessoas com renda inferior a 1,5 salários mínimos.*",
    img: "/infoCards/renda.svg",
  },
  {
    description: "Qualquer local do Brasil.",
    img: "/infoCards/world.svg",
  },
  {
    description: "Temos vagas dedicadas a pessoas com mais de 50 anos",
    img: "/infoCards/elder.svg",
  },
  {
    description: "Temos vagas dedicadas a pessoas pretas e pardas.",
    img: "/infoCards/blackPerson.svg",
  },
  {
    description: "Temos vagas dedicadas a pessoas transgênero ou não binárias.",
    img: "/infoCards/trans.svg",
  },
  {
    description: "Temos vagas dedicadas a mulheres",
    img: "/infoCards/woman.svg",
  },
  {
    description:
      "Temos vagas dedicadas a pessoas em situação de refúgio ou apátridas.",
    img: "/infoCards/refugees.svg",
  },
];

export const ParticiparSection = () => {
  return (
    <S.ParticiparSection>
      <S.Content>
        <S.TopContentWrapper>
          <S.TextWrapper>
            <h2>Posso participar?</h2>
            <p>
              São aptas a participar pessoas que se enquadram no seguinte
              perfil:
            </p>
          </S.TextWrapper>
          <Button text="Lista Das Pessoas Selecionadas" />
        </S.TopContentWrapper>
        <S.CarouselWrapper>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            mousewheel={true}
            pagination={{
              clickable: true,
            }}
            modules={[Mousewheel, Pagination]}
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
              1200: {
                slidesPerView: 5,
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
          *Exclusão do critério de renda para aposentados e pensionistas do INSS
        </S.Warn>
      </S.Content>
    </S.ParticiparSection>
  );
};
