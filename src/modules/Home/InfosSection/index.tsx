import { GbTechLogo } from "components/GbTechLogo";
import { HighlightsCard } from "./HighlightsCards";
import * as S from "./infoSections.style";

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

export const InfoSection = () => {
  return (
    <S.InfoSection>
      <S.Content>
        <div className="TopContent">
          <h3>Nosso Manifesto</h3>
          <S.Manifesto>
            "Nós acreditamos que a tecnologia é impulsionadora do
            desenvolvimento. Acreditamos que a inovação é a única saída em um
            mundo cuja constante é a mudança. Acreditamos que o futuro depende
            da inclusão. De todos. De todas. Por isso, manifestamos o nosso
            compromisso com a redução da lacuna de gênero e de raça na área de
            tecnologia no Brasil, formando pessoas em situação de
            vulnerabilidade para a entrada em um mercado o qual a oferta de
            vagas é muito superior ao número de aplicantes. Por isso, lançamos o
            Desenvolve."
          </S.Manifesto>
        </div>
        <div className="BottomContent">
          <div className="logoWrapper">
            <GbTechLogo fill="#000" />
            <h3>Conheça o GB.Tech</h3>
          </div>
          <p>
            GB.tech é a área de tecnologia do Grupo Boticário, que não para de
            crescer: de 2019 pra cá, dobramos de tamanho! Aqui dentro,
            reinventamos o futuro da beleza todos os dias, desenvolvendo
            soluções que atingem milhões de pessoas e toda a cadeia: desde o
            processo produtivo, lá na fábrica, até os produtos digitais no
            celular de nossas representantes ou consumidores. No Brasil, estamos
            em 99,9% dos municípios, e fora, em mais de 15 países. São mais de 4
            mil lojas próprias, mais de 30 mil pontos de venda parceiros e 7
            marcas que todo mundo ama: O Boticário, quem disse, berenice?,
            Eudora, Beautybox, Vult, Multi B e Beleza Na Web. Bastante coisa,
            não?
          </p>
        </div>
        <S.ImageWrapper>
          <img src="/illustrations/team.svg" />
        </S.ImageWrapper>
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

      {/* <S.BottomWave>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#fff"
            fill-opacity="1"
            d="M0,224L60,213.3C120,203,240,181,360,165.3C480,149,600,139,720,160C840,181,960,235,1080,250.7C1200,267,1320,245,1380,234.7L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </S.BottomWave> */}
    </S.InfoSection>
  );
};
