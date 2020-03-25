import React from "react";
import ReactDOM from "react-dom";
import GameContextProvider from "./context";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <GameContextProvider>
      <App />
    </GameContextProvider>
  </React.StrictMode>,
  rootElement
);
