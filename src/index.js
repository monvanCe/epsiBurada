import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { GlobalProvider } from "./Datas/GlobalVariables";

ReactDOM.render(
  <GlobalProvider>
    <App />
  </GlobalProvider>,
  document.getElementById("root")
);
