// Função que vai ajudar a realizar o Sudoku
export const solver = (grid, row = 0, col = 0) => {
  // Se todos os valores já foram preenchidos, vá para a próxima célula
  if (grid[row][col] !== -1) {
    const isLast = row === 8 && col === 8; // Corrigido para caso base
    if (isLast) return true;

    const [newRow, newCol] = getNext(row, col); // Corrigido para "newRow"
    return solver(grid, newRow, newCol);
  }

  for (let num = 1; num <= 9; num++) {
    // Loop para verificar se o número satisfaz as restrições
    if (checkValid(grid, row, col, num)) {
      grid[row][col] = num; // Preenche a célula com um número válido

      const [newRow, newCol] = getNext(row, col);
      if (solver(grid, newRow, newCol)) return true;
    }
  }

  // Se não for válido, redefine para -1
  grid[row][col] = -1;
  return false;
};

// Função para obter a próxima célula
const getNext = (row, col) => {
  return col !== 8 ? [row, col + 1] : row !== 8 ? [row + 1, 0] : [0, 0];
};

const checkValid = (grid, row, col, num) => {
  return (
    checkRow(grid, row, num) &&
    checkCol(grid, col, num) &&
    checkBox(grid, row, col, num)
  );
};

// Verifica se o número é único na linha
const checkRow = (grid, row, num) => {
  return grid[row].indexOf(num) === -1;
};

// Verifica se o número é único na coluna
const checkCol = (grid, col, num) => {
  return grid.map((row) => row[col]).indexOf(num) === -1;
};

// Verifica se o número é único na subgrade 3x3
const checkBox = (grid, row, col, num) => {
  let boxArr = [];
  const rowStart = row - (row % 3);
  const colStart = col - (col % 3);

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      boxArr.push(grid[rowStart + i][colStart + j]);
    }
  }

  return boxArr.indexOf(num) === -1;
};

// Função para comparar os Sudokus
export const compareSudokus = (currentSudoku, solvedSudoku) => {
  const res = {
    isComplete: true,
    isSolvable: true,
  };

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (currentSudoku[i][j] !== solvedSudoku[i][j]) {
        if (currentSudoku[i][j] !== -1) {
          res.isSolvable = false;
        }
        res.isComplete = false;
      }
    }
  }

  return res;
};
