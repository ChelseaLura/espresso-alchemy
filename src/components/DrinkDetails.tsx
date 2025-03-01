import styled from "styled-components";

const DrinkDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  margin: 0 10px;
`;

export const DrinkDetails = () => {
  return (
    <DrinkDetailContainer>
      <h1>AMERICANO</h1>
      <p>
        Grounds, cream kopi-luwak, latte froth cinnamon body coffee extra ,
        aroma, frappuccino, extra coffee, strong medium aromatic, iced, affogato
        filter foam black acerbic. Black decaffeinated ut chicory, espresso
        filter cup, eu, turkish, trifecta that, carajillo wings con panna fair
        trade single origin to go. Affogato pumpkin spice kopi-luwak barista
        skinny so saucer extraction caramelization medium that froth frappuccino
        cup seasonal wings.
      </p>
    </DrinkDetailContainer>
  );
};
