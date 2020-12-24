import React from "react";
import ReactDOM from "react-dom";
import ThemeContext from "./context/ThemeContext";
import App from "./App";

ReactDOM.render(
  <ThemeContext.Provider value="blue">
    <App />
  </ThemeContext.Provider>,
  document.getElementById("root")
);
