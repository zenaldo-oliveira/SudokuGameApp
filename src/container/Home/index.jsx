import {
  Button,
  ButtonContainer,
  Container
} from "./styles";

import { useState } from "react";
import { Table } from "../../components/table";
import { getDeepCopy } from "../../utils/helpers";
import { compareSudokus, solver } from "../../utils/validators";

const initial = [
  [-1, 5, -1, 9, -1, -1, -1, -1, 2],
  [8, -1, -1, 4, -1, 3, -1, 1, 7],
  [-1, -1, 1, 2, 8, -1, -1, 9, -1],
  [5, 3, 8, 6, -1, 7, 9, 4, -1],
  [-1, 2, -1, 3, 1, -1, -1, 1, -1],
  [1, -1, 9, 8, -1, 4, 6, 2, 3],
  [9, -1, 7, 4, -1, -1, -1, -1, -1],
  [-1, 4, 5, -1, -1, 1, 2, -1, 9],
  [-1, -1, -1, -1, 3, -1, -1, 7, -1],
];

export const Home = () => {
  const [sudokuArr, setSudokuArr] = useState(initial);

  // Função para checar se o Sudoku está correto
  const checkSudoku = () => {
    let sudoku = getDeepCopy(initial);
    solver(sudoku); // Resolve o Sudoku

    let compare = compareSudokus(sudokuArr, sudoku); // Compara com a solução

    // Verifica se o Sudoku está resolvido corretamente
    if (compare.isComplete) return alert("Parabéns! Você resolveu o Sudoku.");
    if (compare.isSolvable) return alert("Continue tentando!");

    return alert("Sudoku não foi resolvido. Tente novamente.");
  };

  // Função para resolver o Sudoku
  const solveSudoku = () => {
    const sudoku = getDeepCopy(sudokuArr); // Cria uma cópia do estado atual
    solver(sudoku); // Resolve o Sudoku

    setSudokuArr([...sudoku]); // Atualiza o estado com a nova cópia
  };

  // Função para resetar o Sudoku
  const resetSudoku = () => {
    setSudokuArr(getDeepCopy(initial)); // Reseta para o estado inicial
  };

  return (
    <Container>
      <h1>Sudoku Game</h1>
      <Table
        sudokuArr={sudokuArr}
        setSudokuArr={setSudokuArr}
        initialArr={initial}
      />
      <ButtonContainer>
        <Button onClick={checkSudoku}>Checar</Button>
        <Button onClick={solveSudoku}>Resolver</Button>
        <Button onClick={resetSudoku}>Reiniciar</Button>
      </ButtonContainer>
    </Container>
  );
};
