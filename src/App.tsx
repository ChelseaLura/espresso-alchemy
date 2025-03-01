import styled from "styled-components";
import { DrinkDisplay } from "./DrinkDisplay";

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
      <DrinkDisplay />
    </AppContainer>
  );
}

export default App;
