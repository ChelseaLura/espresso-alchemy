import styled from "styled-components";
import { Title } from "./utility/commonStyles";

const Container = styled.div`
  display: flex;
  justify-content: end;
  height: 150px;
`;

export const Header = () => {
  return (
    <Container>
      <Title>
        <div />
        <h2>ESPRESSO ALCHEMY</h2>
      </Title>
    </Container>
  );
};
