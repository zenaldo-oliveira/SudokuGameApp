import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  /* Reset básico */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* Definição de variáveis globais */
  :root {
    --primary-color: #007bff;
    --secondary-color: #6c757d;
    --background-color: #f8f9fa;
    --text-color: #333;
    --font-family: "Inter", sans-serif;
  }

  /* Aplicação das configurações globais */
  body {
    font-family: var(--font-family);
    background-color: var(--background-color);
    color: var(--text-color);
    line-height: 1.6;
  }

  /* Alinhamento padrão para evitar centralizar tudo */
  h1, h2, h3, h4, h5, h6, p {
    text-align: center;
  }
`;
