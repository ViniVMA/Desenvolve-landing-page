import * as S from "./infoCards.style";

interface InfoCardProps {
  description: string;
  img: string;
}

export const InfoCard = ({ description, img }: InfoCardProps) => {
  return (
    <S.CardWrapper>
      <S.Content>
        <p>{description}</p>
      </S.Content>
      <S.ImageWrapper>
        <img src={img} />
      </S.ImageWrapper>
    </S.CardWrapper>
  );
};
