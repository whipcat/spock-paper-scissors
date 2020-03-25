import Styled from "styled-components";

const Container = Styled.div`
  width: 100vw;
  text-align: center;
  margin: 0 auto;
  display: flex;
  flex-flow: row;
  justify-content: space-around;
`;

const Player = Styled.span`
  font-size: 2.5rem;
  opacity: .35;
`;

const Score = Styled.h1`
  margin: 0;
  font-size: 4rem;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  display: block;
  font-weight: bold;
  color: #f3f4f5;
  margin-top: 0!important;
  margin-bottom: 0!important;
`;

export { Container, Player, Score };
