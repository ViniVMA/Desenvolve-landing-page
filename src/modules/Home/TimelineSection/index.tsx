import { Button } from "components/Button";
import * as S from "./timelineSection.style";

export const TimelineSection = () => {
  return (
    <S.TimelineSection>
      <S.Content>
        <S.LeftContent>
          <h3>Sobre a seleção</h3>
          <p>Fique por dentro das datas mais importantes do processo.</p>
          <p>
            Mas atenção: as inscrições podem ser encerradas antecipadamente, a
            depender da quantidade de inscritos(as), em função da capacidade de
            absorção de nosso processo seletivo. No entanto, caso isso ocorra,
            iremos atualizar a data limite com ao menos 3 dias corridos de
            antecedência aqui no site. Fique de olho!
          </p>
          <Button white text="Lista Das Pessoas Selecionadas" />
        </S.LeftContent>
        <S.RightContent>
          <div className="wrapper">
            <h2> Linha do tempo do programa</h2>
            <ul className="sessions">
              <li>
                <div className="time">18/10</div>
                <p>Início das incrições</p>
              </li>
              <li>
                <div className="time">21/10</div>
                <p>Clique aqui e assista a live sobre o programa</p>
              </li>
              <li>
                <div className="time">07/11</div>
                <p>Fim das incrições</p>
              </li>
              <li>
                <div className="time">17/12</div>
                <p>Clique aqui e veja as pessoas que foram selecionadas</p>
              </li>
              <li>
                <div className="time">17/01</div>
                <p>Início do programa</p>
              </li>
              <li>
                <div className="time">01/04</div>
                <p>Seleção para formação síncrona e contratações</p>
              </li>
              <li>
                <div className="time">29/10</div>
                <p>Formatura</p>
              </li>
            </ul>
          </div>
        </S.RightContent>
      </S.Content>
      {/* <S.Wave>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#fff"
            fill-opacity="1"
            d="M0,224L60,224C120,224,240,224,360,192C480,160,600,96,720,80C840,64,960,96,1080,122.7C1200,149,1320,171,1380,181.3L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          ></path>
        </svg>
      </S.Wave> */}

      <S.BottomWave>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#fff"
            fill-opacity="1"
            d="M0,224L60,213.3C120,203,240,181,360,165.3C480,149,600,139,720,160C840,181,960,235,1080,250.7C1200,267,1320,245,1380,234.7L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </S.BottomWave>
    </S.TimelineSection>
  );
};
