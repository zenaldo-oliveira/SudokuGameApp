import styled from "styled-components";

export const InputCell = styled.input`
  width: 50px;
  height: 50px;
  font-size: 20px;
  padding: 5px;
  border: 1px solid #000;
  border-radius: 8px;
  text-align: center;
  transition: all 0.2s ease-in-out;

  &:focus {
    outline: 2px solid #007bff; /* Destaque ao focar */
    border-color: #007bff;
  }

  &:hover {
    border-color: #555; /* Efeito visual ao passar o mouse */
  }
`;
