import React from "react";
import { useGameContext } from "../context";

import { Container, Player, Score } from "./styled";

const Footer = () => {
  const {
    gameState: { score, _p1: me, _p2: spock }
  } = useGameContext();

  return (
    <Container>
      <div>
        <Player>{me}</Player>
        <Score>{score.me}</Score>
      </div>
      <div>
        <Player>{spock}</Player>
        <Score>{score.spock}</Score>
      </div>
    </Container>
  );
};

export default Footer;
