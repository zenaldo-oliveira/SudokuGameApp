import {
  Button,
  ButtonContainer,
  Container
} from "./styles"

import { useState } from "react"
import { Table } from "../../components/table"
import { getDeepCopy } from "../../utils/helpers"
import { compareSudokus, solver } from "../../utils/validators"


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

  // Checar se o Sudoku está correto
  const checkSudoku = () => {
    let sudoku = getDeepCopy(sudokuArr);
    solver(sudoku);
    let compare = compareSudokus(sudoku, sudokuArr);

    if (compare.isComplete) return alert('Parabéns! Você resolveu o Sudoku.');
    if (compare.isSolvable) return alert('Continue tentando!');
    return alert('Sudoku não foi resolvido. Tente novamente');
  };

  // Resolver o Sudoku
  const SolveSudoku = () => {
    console.log("Botão Resolver foi clicado");
    let sudoku = getDeepCopy(sudokuArr);
    solver(sudoku);

    setSudokuArr(sudoku); // Atualiza o estado com o Sudoku resolvido

  };

  // Resetar o Sudoku
  const ResetSudoku = () => {
    console.log("Sudoku antes de resolver:", sudokuArr);
    setSudokuArr(getDeepCopy(initial)) // Reseta para o estado inicial
    // console.log(initial)
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
        <Button onClick={SolveSudoku}>Resolver</Button>
        <Button onClick={ResetSudoku}>Reiniciar</Button>
      </ButtonContainer>
    </Container>
  );
};
