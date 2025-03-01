import styled from "styled-components";

export const CenteredColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  div {
    width: 100%;
    height: 15px;
    background-color: var(--cafe-black);
  }
  h2 {
    margin-top: -9px;
  }
  h3 {
    margin-top: -7px;
  }
`;
