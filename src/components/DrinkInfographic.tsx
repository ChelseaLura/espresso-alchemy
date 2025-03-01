import styled from "styled-components";
import { CenteredColumn } from "../utility/commonStyles";

const DrinkPart = styled.div`
  width: var(--drink-width);
  display: flex;

  p {
    align-self: flex-end;
    margin-bottom: 0;
    margin-left: 5px;
  }
`;

const Espresso = styled(DrinkPart)`
  height: 100px;
  background-color: var(--cafe-espresso-brown);
  color: var(--color-text-light);
`;

const Water = styled(DrinkPart)`
  height: 200px;
  background-color: var(--cafe-water-color);
  color: var(--color-text-light);
`;

export const DrinkInfographic = () => {
  return (
    <CenteredColumn>
      <Espresso>
        <p>Espresso</p>
      </Espresso>
      <Water>
        <p>Water</p>
      </Water>
    </CenteredColumn>
  );
};
