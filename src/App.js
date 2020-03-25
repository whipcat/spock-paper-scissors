import React from "react";
import { useGameContext } from "./context";

import Option from "./option";
import { NAMES } from "./core/options";
import HANDS from "./core/hands";

import Footer from "./footer";
import Message from "./message";

import "./style.scss";

const App = () => {
  const {
    gameState: { answered, cpuHand }
  } = useGameContext();

  const animating = answered ? "flip-me" : "";

  const showOptions = (hand, type = null) => {
    let options = [];

    if (hand) {
      options = HANDS.filter(item => item.name.toLowerCase() === hand);
    } else {
      options = HANDS.filter(item => item.name.toLowerCase() !== NAMES.SPOCK);
    }

    const items = options.map(({ name, icon }, i) => {
      return (
        <Option
          key={`icon--${i}`}
          hand={name}
          icon={icon}
          number={i + 1}
          type={type}
        />
      );
    });

    return items;
  };

  return (
    <div className="App">
      <article className="column">
        <div className="description">
          <h1>Rock Paper Scissors *No Lizard* Spock</h1>
          <small>
            As <b>Sheldon</b> explains, "Scissors cuts paper, paper covers rock,
            rock crushes lizard, lizard poisons Spock, Spock smashes scissors,
            scissors decapitates lizard, lizard eats paper, paper disproves
            Spock, Spock vaporizes rock, and as it always has, rock crushes
            scissors."
          </small>
        </div>
        <div className={`flip-container ${animating}`}>
          <div className="flipper">
            <div className="front">{showOptions(NAMES.SPOCK, "cpu")}</div>
            <div className="back">{showOptions(cpuHand, "cpu")}</div>
          </div>
        </div>
        <div className="answers row around">{showOptions()}</div>
        <Footer />
        <Message />
      </article>
    </div>
  );
};

export default App;
