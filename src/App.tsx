import styled from "styled-components";
import { DrinkDisplay } from "./DrinkDisplay";
import { Header } from "./Header";
import { Recipe } from "./components/Recipe";

const AppContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  font-weight: normal;
  @media (max-width: 600px) {
    padding: 1rem;
  }
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <DrinkDisplay />
      <Recipe />
    </AppContainer>
  );
}

export default App;
