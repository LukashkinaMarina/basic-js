import { NotImplementedError } from "../extensions/index.js";

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
export default function getMatrixElementsSum(matrix) {
  const reduce = (arr) =>
    arr.reduce((a, b) => a + (b.length > 0 ? reduce(b) : b * 1), 0);
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (!matrix[i][j] && (matrix[i + 1] || false)) matrix[i + 1][j] = 0;
    }
  }
  return reduce(matrix);
}
