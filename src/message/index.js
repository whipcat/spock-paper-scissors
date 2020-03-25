import React from "react";
import { useGameContext } from "../context";
import { ICONS } from "../core/options";

import { MessageContainer, Background, Text } from "./styled";
import { Chip, Icon } from "../option/styled";
import { base, alert, warning, success } from "./styled/colors";

const Message = () => {
  const {
    gameState: { message, answered, winner, spocked },
    playAgain
  } = useGameContext();

  // has to be in an effect
  // otherwise animating out the message wil loose the bg-color
  const getBgColor = () => {
    if (winner) {
      if (winner.toLowerCase() === "tie") {
        return base;
      }
      if (winner.toLowerCase() === "me") {
        return success;
      }
      if (winner.toLowerCase() === "spock") {
        return alert;
      }
    }

    if (spocked) {
      return warning;
    }
  };

  const show = answered ? "show" : "";
  const bgColor = getBgColor();

  return (
    <MessageContainer className={show}>
      <Background bg={bgColor} onClick={playAgain}>
        <Text>{message}</Text>
        <Chip className="beacon-1">
          <Icon className={`${ICONS.REFRESH} refresh`} />
        </Chip>
      </Background>
    </MessageContainer>
  );
};

export default Message;
