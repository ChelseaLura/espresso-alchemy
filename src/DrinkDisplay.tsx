import styled from "styled-components";
import { DrinkInfographic } from "./drinkComponents/DrinkInfographic";
import { DrinkDetails } from "./drinkComponents/DrinkDetails";

const VerticalRule = styled.div`
  min-height: 100%;
  width: 3px;
  color: var(--cafe-black);
  background-color: var(--cafe-black);
  flex-shrink: 0;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: var(--gap-medium);
  padding: var(--gap-medium);
`;

const SideBySideDisplay = () => {
  return (
    <>
      <DrinkInfographic />
      <VerticalRule />
      <DrinkDetails />
    </>
  );
};

export const DrinkDisplay = () => {
  return (
    <>
      <hr></hr>
      <Container>
        <SideBySideDisplay />
      </Container>
      <hr></hr>
    </>
  );
};
