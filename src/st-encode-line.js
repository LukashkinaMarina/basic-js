import { NotImplementedError } from "../extensions/index.js";

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
  let arr = str.split("");
  let value = "";
  for (let i = 0; i < arr.length; i++) {
    let count = 1;
    for (let n = i + 1; n < arr.length; n++) {
      if (arr[i] === arr[n]) {
        count++;
        i++;
      } else {
        break;
      }
    }
    value += count === 1 ? arr[i] : count + arr[i];
  }
  return value;
}
