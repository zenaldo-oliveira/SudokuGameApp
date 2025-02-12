import styled from "styled-components";

export const InputCell = styled.input`
  width: clamp(40px, 10vw, 60px); /* Ajusta entre 40px e 60px conforme a tela */
  height: clamp(40px, 10vw, 60px);
  font-size: clamp(16px, 3vw, 20px); /* Fonte cresce proporcionalmente */
  padding: 5px;
  border: 1px solid #000;
  border-radius: 8px;
  text-align: center;
  transition: all 0.2s ease-in-out;
  max-width: 100%; /* Evita que ultrapasse o container */

  &:focus {
    outline: 2px solid #007bff;
    border-color: #007bff;
  }

  &:hover {
    border-color: #555;
  }

  /* Ajuste fino para telas menores */
  @media (max-width: 480px) {
    width: 35px;
    height: 35px;
    font-size: 14px;
    padding: 3px;
  }
`;
