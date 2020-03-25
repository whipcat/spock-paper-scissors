import React from "react";
import PropTypes from "prop-types";
import { useGameContext } from "../context";

import { NAMES } from "../core/options";
import { Column, Chip, Icon } from "./styled";

const Option = ({ hand, icon, number, type }) => {
  const {
    playHand,
    gameState: { answered, winner }
  } = useGameContext();
  const animation =
    hand.toLowerCase() !== NAMES.SPOCK ? `beacon-${parseInt(number, 10)}` : "";

  const setClasses = () => {
    if (answered === hand && winner.toLowerCase() === "me") {
      return "bg-dark";
    }
    if (!answered) {
      return `bg-light ${animation}`;
    }

    return "";
  };

  const colorOfChip = setClasses();

  if (type && type.toLowerCase() === "cpu") {
    return (
      <Column align="align-center">
        <Chip className="bg-light">
          <Icon className={`${icon}`} />
        </Chip>
      </Column>
    );
  }

  return (
    <Column align="align-center">
      <Chip className={`${colorOfChip}`} onClick={() => playHand(hand)}>
        <Icon className={`${icon}`} />
      </Chip>
    </Column>
  );
};

Option.propTypes = {
  hand: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  type: PropTypes.string
};

export default Option;
