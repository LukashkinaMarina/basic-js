import { NotImplementedError } from "../extensions/index.js";

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
export default function minesweeper(matrix) {
  let neighs;
  const length = matrix.length;
  const emptyMatrix = (m) => m.map((r) => r.map((v) => 0));
  const neighbors = ([x, y]) => {
    const arr = [-1, 0, 1, -1, 1, -1, 0, 1];
    return [-1, -1, -1, 0, 0, 1, 1, 1].map((v, i) => [x + v, y + arr[i]]);
  };
  const getV = (x, y = 0) => neighs[x][y];
  let newMatrix = emptyMatrix(matrix);
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (matrix[i][j]) {
        neighs = neighbors([i, j]);
        for (let k = 0; k < 8; k++) {
          if (
            getV(k) > -1 &&
            getV(k, 1) > -1 &&
            getV(k) < length &&
            getV(k, 1) < length
          ) {
            newMatrix[getV(k)][getV(k, 1)]++;
          }
        }
      }
    }
  }

  return newMatrix;
}
