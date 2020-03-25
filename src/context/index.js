import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { NAMES } from "../core/options";

const GameContext = React.createContext({});
const KEY = "score";

const useGameContext = () => {
  const context = React.useContext(GameContext);
  if (!context) {
    throw new Error("No context found!");
  }

  return context;
};

const GameProviderContext = ({ children }) => {
  const [gameState, _setGameState] = useState({
    _p1: "Me",
    _p2: "Spock",
    spocked: false,
    answered: false,
    winner: "",
    message: "",
    score: {
      me: 0,
      spock: 0
    },
    splashIconArray: [],
    cpuHand: NAMES.ROCK // needed for flipping animation
  });

  useEffect(() => {
    const data = localStorageHelper().get();

    if (!data) {
      localStorageHelper().save({
        me: 0,
        spock: 0
      });
    } else {
      setGameState({ score: data });
    }
  }, []);

  useEffect(() => {
    const getChoicesForCPU = () => {
      const splashIconArray = [];

      for (let i = 0; i < 29; i++) {
        const _arr = [NAMES.ROCK, NAMES.PAPER, NAMES.SCISSORS];
        // every 9th item add 'spock'
        if (i % 9 === 0) {
          _arr.push(NAMES.SPOCK);
        }

        splashIconArray.push(_arr);
      }

      const flattend = splashIconArray.reduce((a, b) => a.concat(b), []);
      setGameState({
        splashIconArray: flattend,
        cpuHand: flattend[0]
      });
    };

    getChoicesForCPU();
  }, []);

  const setGameState = next => {
    _setGameState(prev => ({ ...prev, ...next }));
  };

  const playAgain = () => {
    // don'reset winner to 'null'
    // so backgroundColor of message will be the same
    // when animating out
    setGameState({
      spocked: false,
      answered: false,
      message: "",
      score: localStorageHelper().get()
    });
  };

  const playHand = hand => {
    const { answered, splashIconArray, _p1, _p2 } = gameState;
    let spocked = false;
    let winner = null;
    let message = null;
    let score = gameState.score;

    const handSpock =
      splashIconArray[Math.floor(Math.random() * splashIconArray.length)];
    // splashIconArray[3]; // spock

    if (answered) {
      return;
    }

    if (handSpock === NAMES.SPOCK) {
      spocked = true;
      winner = _p2;
      message = "You've been Spocked'd";
    } else {
      if (hand === handSpock) {
        winner = "tie";
        message = "it's a tie";
      } else {
        if (
          (hand === NAMES.ROCK && handSpock === NAMES.SCISCCORS) ||
          (hand === NAMES.PAPER && handSpock === NAMES.ROCK) ||
          (hand === NAMES.SCISCCORS && handSpock === NAMES.PAPER)
        ) {
          winner = _p1;
          message = "You won!";
        } else {
          winner = _p2;
          message = "You lost!";
        }
      }
    }

    if (winner !== "tie") {
      score = _recordScore(winner);
    }

    setGameState({
      answered: hand,
      spocked,
      winner,
      message,
      score,
      cpuHand: handSpock
    });

    console.log("CPU hand = ", handSpock);
    console.log("PLAYER hand = ", hand);
    console.log("=======================");
    console.log("message = ", message);
    console.log("score = ", score);
    console.log("=======================");
  };

  const _recordScore = winner => {
    const { score, _p1, _p2 } = gameState;

    let myScore = parseInt(score.me, 10);
    let spockScore = parseInt(score.spock, 10);

    if (winner === _p1) {
      myScore = parseInt(score.me, 10) + 1;
    }

    if (winner === _p2) {
      spockScore = parseInt(score.spock, 10) + 1;
    }

    const newScore = {
      me: myScore,
      spock: spockScore
    };

    localStorageHelper().save(newScore);

    return newScore;
  };

  const localStorageHelper = () => {
    const factory = {
      get: () => {
        const item = window.localStorage.getItem(KEY);
        if (!item) {
          return {
            me: 0,
            spock: 0
          };
        }
        if (item && typeof item === "string") {
          return JSON.parse(item);
        } else {
          return item;
        }
      },
      save: data => {
        window.localStorage.setItem(KEY, JSON.stringify(data));
      },
      remove: () => {
        window.localStorage.removeItem(KEY);
      },
      clearAll: () => {
        window.localStorage.clearAll();
      }
    };

    return factory;
  };

  return (
    <>
      <GameContext.Provider
        value={{
          gameState,
          setGameState,
          playHand,
          playAgain
        }}
      >
        {children}
      </GameContext.Provider>
    </>
  );
};

GameProviderContext.propTypes = {
  children: PropTypes.any.isRequired
};

export { useGameContext, GameContext };
export default GameProviderContext;
