import { ReactNode } from "react";
import * as S from "./categoryCard.style";

interface CategoryCardProps {
  img: string;
  avaliable: string;
  title: string;
  description: string;
  months: string;
  workload: string;
}

export const CategoryCard = ({
  img,
  avaliable,
  title,
  description,
  months,
  workload,
}: CategoryCardProps) => {
  return (
    <S.CardWrapper>
      <img src={img} />
      <S.Avaliable>{avaliable} Vagas</S.Avaliable>
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
      <S.Infos>
        <S.InfosCard>
          <span>Duração</span>
          <hr />
          <span>{months}</span>
        </S.InfosCard>
        <S.InfosCard>
          <span>Carga Horaria</span>
          <hr />
          <span>{workload}</span>
        </S.InfosCard>
      </S.Infos>
      <S.Link>Veja detalhes da formação em Full Stack</S.Link>
    </S.CardWrapper>
  );
};
