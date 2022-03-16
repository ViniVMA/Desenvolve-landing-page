import { HighlightsCard } from "./HighlightsCards";
import * as S from "./numbersSection.style";

const Highlights = [
  {
    students: "30",
    title: "Fullstack",
    description: "recebem formação da escola Labenu.",
  },
  {
    students: "5",
    title: "Dados",
    description: "recebem formação de escola parceira a ser definida.",
  },
  {
    students: "5",
    title: "DevOps",
    description: "recebem formação de escola parceira a ser definida.",
  },
];

export const NumbersSection = () => {
  return (
    <S.NumbersSection>
      <S.Content>
        <S.ImageWrapper>
          <img src="/illustrations/groupChatting.svg" />
        </S.ImageWrapper>
        <S.RightContent>
          <span>Ao todo são</span>
          <h3>400 Vagas na Alura</h3>
          <p>
            Após 3 meses de curso, serão selecionados os
            <strong> 40 alunos que mais se destacarem</strong> para receber uma
            formação especial. Esses alunos terão a chance de trabalhar no Grupo
            Boticário em vagas de meio período, e no restante do tempo continuam
            a formação.
          </p>
          <S.CardsWrapper>
            {Highlights.map(({ students, title, description }) => (
              <HighlightsCard
                students={students}
                title={title}
                description={description}
              />
            ))}
          </S.CardsWrapper>
          <div className="bottomText">
            <p>
              Os outros 360 alunos seguem sua formação na Alura, com 9 meses de
              duração ao todo.
            </p>
            <a>
              Acesse aqui nosso guia preparatório para as provas do processo
              seletivo.
            </a>
          </div>
        </S.RightContent>
      </S.Content>
      <S.Wave>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#fff"
            fill-opacity="1"
            d="M0,224L60,224C120,224,240,224,360,192C480,160,600,96,720,80C840,64,960,96,1080,122.7C1200,149,1320,171,1380,181.3L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          ></path>
        </svg>
      </S.Wave>

      <S.BottomWave>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#fff"
            fill-opacity="1"
            d="M0,224L60,213.3C120,203,240,181,360,165.3C480,149,600,139,720,160C840,181,960,235,1080,250.7C1200,267,1320,245,1380,234.7L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </S.BottomWave>
    </S.NumbersSection>
  );
};
