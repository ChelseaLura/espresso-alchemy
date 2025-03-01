import styled from "styled-components";
import { Title } from "../utility/commonStyles";

const Container = styled.div`
  margin-top: -11px;
  display: flex;
  flex-direction: column;
`;

const Flex = styled.div`
  display: flex;
`;

const Part = styled.div`
  height: 40px;
  width: 40px;
`;

const EspressoPart = styled(Part)`
  background-color: var(--cafe-espresso-brown);
`;

const WaterPart = styled(Part)`
  background-color: var(--cafe-water-color);
`;

const PartContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  p {
    margin: 0;
  }
`;

const RecipePartContainer = styled.div`
  display: flex;
  gap: 50px;
  margin-top: 40px;
`;

export const Recipe = () => {
  return (
    <Container>
      <Flex>
        <Title>
          <div />
          <h3>RECIPE</h3>
        </Title>
      </Flex>

      <RecipePartContainer>
        <PartContainer>
          <EspressoPart />
          <EspressoPart />
          <p>2 Parts Espresso</p>
        </PartContainer>
        <PartContainer>
          <WaterPart />
          <WaterPart />
          <WaterPart />
          <WaterPart />
          <p>4 Parts Water</p>
        </PartContainer>
      </RecipePartContainer>
    </Container>
  );
};
