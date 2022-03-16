import styled from "styled-components/macro";
import { Header } from "components/Header";
import { HeroSection } from "modules/Home/HeroSection";
import { ModalidadesSection } from "modules/Home/Modalidades";
import { NumbersSection } from "modules/Home/NumbersSections";
import { ParticiparSection } from "modules/Home/ParticiparSection";

const AppWrapper = styled.div`
  position: relative;
`;

function App() {
  return (
    <AppWrapper className="App">
      <Header />
      <HeroSection />
      <ModalidadesSection />
      <NumbersSection />
      <ParticiparSection />
    </AppWrapper>
  );
}

export default App;
