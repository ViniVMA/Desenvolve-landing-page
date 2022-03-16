import { CategoryCard } from "./CategoryCard";
import * as S from "./modalidades.style";

const cardsData = [
  {
    img: "/illustrations/cardDev.svg",
    avaliable: "300",
    title: "FullStack",
    description:
      "A pessoa desenvolvedora Full Stack é responsável por toda a construção da solução e suas integrações. Aprenda lógica de programação, javascript, Flutter, HTML/CSS, Node.js, Git e Github.",
    months: "9",
    workload: "600",
  },
  {
    img: "/illustrations/cardDev.svg",
    avaliable: "50",
    title: "DevOps",
    description:
      "A pessoa que trabalha na área de DevOps pode atuar ao mesmo tempo no desenvolvimento dos sistemas e nas suas infraestruturas, sendo responsável por otimizar a produtividade (desenvolvimento) e a confiabilidade (infraestrutura). Aprenda lógica de programação, Git e Github, Linux, Redes, Dockers, Kubernetes e Cloud (nuvem).",
    months: "9",
    workload: "600",
  },
  {
    img: "/illustrations/cardDev.svg",
    avaliable: "50",
    title: "Dados",
    description:
      "A pessoa que trabalha na área de Dados é responsável por estruturar coletas, entender padrões e extrair conhecimento de todo tipo de dado. Aprenda lógica de programação, estrutura de dados, SQL e MySQL, Python, Google BigQuery e Data Studio, Data Visualization e Machine Learning.",
    months: "9",
    workload: "600",
  },
];

export const ModalidadesSection = () => {
  return (
    <S.HeroSection>
      <S.Content>
        <S.CardsWrapper>
          {cardsData.map(
            ({ img, avaliable, title, description, months, workload }) => (
              <CategoryCard
                img={img}
                avaliable={avaliable}
                title={title}
                description={description}
                months={months}
                workload={workload}
              />
            ),
          )}
        </S.CardsWrapper>
      </S.Content>
    </S.HeroSection>
  );
};
