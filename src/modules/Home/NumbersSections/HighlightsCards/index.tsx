import * as S from "./highlightsCards.style";

interface HighlightsCardProps {
  students: string;
  title: string;
  description: string;
}

export const HighlightsCard = ({
  students,
  title,
  description,
}: HighlightsCardProps) => {
  return (
    <S.HighlightsCard>
      <span>
        {students}
        {" Alunos Destaque"}`
      </span>
      <S.Title>{title}</S.Title>
      <span>{description}</span>
    </S.HighlightsCard>
  );
};
