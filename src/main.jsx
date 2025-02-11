import React from "react";
import ReactDom from "react-dom/client";
import { App } from "./App.jsx";
import { GlobalStyle } from "./styles";

// Criando a raiz e renderizando o componente App
ReactDom.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);
