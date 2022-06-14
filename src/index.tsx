import React from "react";
import ReactDOM from "react-dom";
import { Theme, ThemeProvider } from "@emotion/react";

import App from "./App";

const theme: Theme = {
  colors: {
    primary: "hotpink"
  }
};

const rootElement = document.getElementById("root");

const render = () => {
  return ReactDOM.render(
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>,
    rootElement
  );
};

render();
