// Função que vai ajudar a realizar o Sudoku //
export const solver = (grid, row = 0, col = 0) => {
  // Se todos os valores já foram preenchidos, vá para a próxima célula //
  if (grid[row][col] !== -1) {
    const isLast = row >= 8 && col >= 8;
    if (!isLast) {
      const [newRow, newCol] = getNext(row, col);
      return solver(grid, newRow, newCol);
    }
  }

  for (let num = 1; num <= 9; num++) {
    // Loop para verificar se o número satisfaz as restrições

    if (checkValid(grid, row, col, num)) {
      grid[row][col] = num;

      const [newRow, newCol] = getNext(row, col);

      if (!newRow && !newCol) return true;
      if (solver(grid, newRow, newCol)) return true;
    }
  }

  // se for valido preencher com -1
  grid[row][col] = -1;
  return false;
};

// Função para obter a próxima célula
const getNext = (row, col) => {
  // Se a coluna atingir o 8, vá para a próxima linha
  // Se a linha atingir e a coluna atingir o 8, a próxima será [0,0]
  // Se a coluna não atingir o 8, incremente o número da coluna.
  return col !== 8 ? [row, col + 1] : row !== 8 ? [row + 1, 0] : [0, 0];
};

const checkValid = (grid, row, col, num) => {
  // Função vai verificar se o número pode ser colocado na linha, coluna e no quadrado 3x3

  if (
    checkRow(grid, row, num) &&
    checkCol(grid, col, num) &&
    checkBox(grid, row, col, num)
  )
    return true;

  return false;
};

// Verifica se o número é único na linha
const checkRow = (grid, row, num) => {
  return grid[row].indexOf(num) === -1;
};

// Verifica se o número é único na coluna
const checkCol = (grid, col, num) => {
  return grid.map((row) => row[col]).indexOf(num) === -1;
};

// Verifica se o número é único no quadrado 3x3
const checkBox = (grid, row, col, num) => {
  let boxArr = [],
    rowStart = row - (row % 3),
    colStart = col - (col % 3);

  for (let i = 0; i < 3; i++) {
    // Pega todos números de células e coloca dentro do array boxArr
    for (let j = 0; j < 3; j++) {
      boxArr.push(grid[rowStart + i][colStart + j]);
    }
  }

  return boxArr.indexOf(num) === -1;
};

// função para comparar os sudoku's
export const compareSudokus = (currentSudoku, solvedSudoku) => {
  //resposta
  const res = {
    isComplete: true,
    isSolvable: true,
  };
  // estrutura de repetição vamos usar pera comparar os arrays
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (currentSudoku[i][j] == solvedSudoku[i][j]) {
        if (currentSudoku[i][j] !== -1) {
          res.isSolvable = false;
        }
        res.isComplete = false;
      }
    }
  }

  return res;
};
