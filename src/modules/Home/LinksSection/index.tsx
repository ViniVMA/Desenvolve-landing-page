import { Swiper, SwiperSlide } from "swiper/react";
import { Button } from "components/Button";
import * as S from "./links.style";
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

export const LinksSection = () => {
  return (
    <S.LinksSection>
      <S.Content>
        <S.CardWrapper>
          <S.Title>Sobre o GB</S.Title>
          <S.Description>
            Acesse nosso Medium e saiba mais sobre a área de tecnologia do Grupo
            Boticário.
          </S.Description>
          <Button text="Conheça o GBTech" />
        </S.CardWrapper>
        <S.Separator />
        <S.CardWrapper>
          <S.Title>Temos vagas</S.Title>
          <S.Description>
            Já atua como desenvolvedor e está procurando oportunidades onde
            possa fazer a diferença no mundo?
          </S.Description>
          <Button text="Conheça nossas vagas" />
        </S.CardWrapper>
      </S.Content>
    </S.LinksSection>
  );
};
