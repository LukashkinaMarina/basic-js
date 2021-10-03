import { NotImplementedError } from "../extensions/index.js";

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
export default function sortByHeight(arr) {
  const newArr = arr
    .map((e, i) => (e === -1 ? i : undefined))
    .filter((e) => e !== undefined);
  const sorted = arr.filter((e) => e > -1).sort((a, b) => a - b);
  for (let i = 0; i < newArr.length; i++) {
    sorted.splice(newArr[i], 0, -1);
  }
  return sorted;
}
