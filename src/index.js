import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GlobalProvider } from "./Datas/GlobalVariables";

const rootElement = document.getElementById("root");

ReactDOM.createRoot(rootElement).render(
  <GlobalProvider>
    <App />
  </GlobalProvider>
);
