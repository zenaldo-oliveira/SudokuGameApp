import styled from "styled-components";

// Definições de cores
const primaryColor = "#ffffff";
const overlayColor = "rgba(0, 0, 0, 0.5)";
const backgroundColorFallback = "#1a1a1a"; // Cor de fundo sólida enquanto a imagem carrega

// Container principal com fundo
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; /* Centraliza o conteúdo verticalmente */
  gap: 1.25rem; /* Usando rem para melhor responsividade */
  padding: 1.25rem; /* Rem para responsividade */
  min-height: 100vh;
  width: 100%; /* Garante que o fundo ocupe toda a largura */
  background-color: ${backgroundColorFallback}; /* Cor de fundo enquanto a imagem carrega */
  background-image: url("../../../public/backgound.png"); /* Substitua pelo caminho correto */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: ${primaryColor}; /* Texto claro para contraste */
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5); /* Sombra no texto para melhorar a legibilidade */

  /* Efeito de overlay para melhorar a visibilidade do conteúdo */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${overlayColor}; /* Deixa a imagem mais escura para melhor contraste */
    z-index: -1;
  }

  transition: background 0.5s ease-in-out;

  @media (max-width: 500px) {
    justify-content: center;
    min-height: 100vh;
    text-align: center;
    gap: 1rem; /* Reduz o espaço entre os botões */
    padding: 1rem; /* Ajusta o padding para telas pequenas */
  }
`;

// Container de botões
export const ButtonContainer = styled.div`
  display: flex;
  gap: 0.625rem; /* Usando rem */
  flex-wrap: wrap; /* Para garantir que os botões não fiquem amontoados em telas pequenas */
  justify-content: center; /* Centraliza os botões */
`;

// Botão base com animações de interação
const ButtonBase = styled.button`
  padding: 0.75rem 1.25rem; /* Rem para responsividade */
  border: none;
  border-radius: 0.5rem; /* Bordas arredondadas */
  font-size: 1rem; /* Font-size responsivo */
  font-weight: bold;
  color: ${primaryColor};
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.2);
  text-transform: uppercase; /* Para melhorar a legibilidade do texto no botão */

  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
    box-shadow: 0 0 15px rgba(0, 255, 0, 0.3); /* Brilho no hover */
  }

  &:active {
    transform: scale(0.98);
  }
`;

// Botões específicos
export const CheckButton = styled(ButtonBase)`
  background: #4caf50;

  &:hover {
    background: #45a049;
  }
`;

export const SolveButton = styled(ButtonBase)`
  background: #ff9800;

  &:hover {
    background: #e68900;
  }
`;

export const ResetButton = styled(ButtonBase)`
  background: #f44336;

  &:hover {
    background: #d32f2f;
  }
`;
