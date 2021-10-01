import { NotImplementedError } from "../extensions/index.js";

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
  let arr = n.toString().split("");
  let best = 0;
  for (let i = 0; i < arr.length; i++) {
    const value = Number(arr.filter((e, index) => index !== i).join(""));
    if (value > best) {
      best = value;
    }
  }
  return best;
}
