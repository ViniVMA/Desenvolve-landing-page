import styled from "styled-components/macro";
import { Header } from "components/Header";
import { HeroSection } from "modules/Home/HeroSection";
import { ModalidadesSection } from "modules/Home/Modalidades";

const AppWrapper = styled.div`
  position: relative;
`;

function App() {
  return (
    <AppWrapper className="App">
      <Header />
      <HeroSection />
      <ModalidadesSection />
    </AppWrapper>
  );
}

export default App;
