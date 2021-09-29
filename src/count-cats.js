import { NotImplementedError } from "../extensions/index.js";

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
export default function countCats(cat) {
  let x = 0;
  let arr = cat.flat(Infinity);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "^^") {
      x++;
    }
  }
  return x;
}
