import React from "react";
import ReactDOM from "react-dom";
import { CountProvider } from "./context/CountContext";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <CountProvider>
      <App />
    </CountProvider>
  </React.StrictMode>,
  document.querySelector("#root")
);
