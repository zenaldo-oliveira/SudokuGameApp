import PropTypes from "prop-types";
import { getDeepCopy } from "../../utils/helpers";
import { Input } from "../input";
import { TableContainer, Td } from "./style";

export const Table = ({ sudokuArr, setSudokuArr, initialArr }) => {
  // Garantindo que sudokuArr e initialArr são arrays 9x9 válidos
  const validatedSudokuArr =
    Array.isArray(sudokuArr) &&
    sudokuArr.length === 9 &&
    sudokuArr.every((row) => Array.isArray(row) && row.length === 9)
      ? sudokuArr
      : Array.from({ length: 9 }, () => Array(9).fill(-1));

  const validatedInitialArr =
    Array.isArray(initialArr) &&
    initialArr.length === 9 &&
    initialArr.every((row) => Array.isArray(row) && row.length === 9)
      ? initialArr
      : Array.from({ length: 9 }, () => Array(9).fill(-1));

  console.log("sudokuArr:", validatedSudokuArr);
  console.log("initialArr:", validatedInitialArr);

  const onInputChange = (e, row, col) => {
    let value = parseInt(e.target.value) || -1;

    if (value === -1 || (value >= 1 && value <= 9)) {
      const updatedGrid = getDeepCopy(validatedSudokuArr);
      updatedGrid[row][col] = value;
      setSudokuArr(updatedGrid);
    }
  };

  return (
    <TableContainer>
      <tbody>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((row, rIndex) => (
          <tr
            key={rIndex}
            className={(row + 1) % 3 === 0 ? "borderBottom" : ""}
          >
            {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((col, cIndex) => (
              <Td
                key={`${rIndex}-${cIndex}`}
                className={(col + 1) % 3 === 0 ? "borderRight" : ""}
              >
                <Input
                  onChange={(e) => onInputChange(e, row, col)}
                  value={
                    validatedSudokuArr[row][col] === -1
                      ? ""
                      : validatedSudokuArr[row][col]
                  }
                  disabled={validatedInitialArr[row][col] !== -1}
                />
              </Td>
            ))}
          </tr>
        ))}
      </tbody>
    </TableContainer>
  );
};

Table.propTypes = {
  sudokuArr: PropTypes.array,
  setSudokuArr: PropTypes.func,
  initialArr: PropTypes.array,
};
