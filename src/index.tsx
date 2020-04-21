import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import "./index.css";
import App from "./pages/App";
import * as serviceWorker from "./serviceWorker";

import { materialTheme } from "./theme";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={materialTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root"),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
