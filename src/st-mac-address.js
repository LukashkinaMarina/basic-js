import { NotImplementedError } from "../extensions/index.js";

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
export default function isMAC48Address(n) {
  let newArr1 = n.split("-").join("");
  let newArr2 = newArr1.split("");
  if (newArr1.length < 12 || newArr1.length > 12) return false;
  for (let i = 0; i < newArr2.length; i++) {
    if (
      (newArr2[i] <= "F" && newArr2[i] >= "A") ||
      (newArr2[i] <= "9" && newArr2[i] >= "0")
    ) {
    } else return false;
  }
  return true;
}
