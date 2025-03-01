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

const EvenSplitContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: var(--gap-medium);
  padding: var(--gap-medium);
`;

const UnevenSplitContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: var(--gap-medium);
  padding: var(--gap-medium);
  width: 100%;
`;

const EvenSplitDisplay = () => {
  return (
    <EvenSplitContainer>
      <DrinkInfographic />
      <VerticalRule />
      <DrinkDetails />
    </EvenSplitContainer>
  );
};

const UnevenSplitDisplay = () => {
  return (
    <UnevenSplitContainer>
      <DrinkInfographic />
      <VerticalRule />
      <DrinkDetails />
    </UnevenSplitContainer>
  );
};

export const DrinkDisplay = () => {
  return (
    <>
      <hr></hr>
      <EvenSplitDisplay />
      <hr></hr>
      <UnevenSplitDisplay />
      <hr></hr>
    </>
  );
};
