import styled from "styled-components";
import { DrinkInfographic } from "./components/DrinkInfographic";
import { DrinkDetails } from "./components/DrinkDetails";

const VerticalRule = styled.div`
  min-height: 100%;
  width: 3px;
  color: var(--cafe-black);
  background-color: var(--cafe-black);
  flex-shrink: 0;
  margin: 0 var(--gap-medium);
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  gap: var(--gap-medium);
  padding: var(--gap-medium);
  width: 100%;
`;

const MainDisplay = styled.div`
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SideDisplay = styled.div`
  width: 40%;
  display: flex;
  justify-content: space-between;
`;

export const DrinkDisplay = () => {
  return (
    <>
      <hr></hr>
      <Container>
        <MainDisplay>
          <DrinkInfographic />
        </MainDisplay>
        <SideDisplay>
          <VerticalRule />
          <DrinkDetails />
        </SideDisplay>
      </Container>
      <hr></hr>
    </>
  );
};
