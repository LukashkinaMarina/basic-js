import { NotImplementedError } from "../extensions/index.js";

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
export default function transform(array) {
  if (!Array.isArray(array))
    throw new Error("'arr' parameter must be an instance of the Array!");
  const a = [...array];
  for (let i = 0; i < a.length; i++) {
    if (a[i] === "--discard-next") {
      a[i] = undefined;
      a[i + 1] = undefined;
    }
    if (a[i] === "--double-next") {
      a[i] = a[i + 1];
    }
    if (a[i] === "--double-prev") {
      a[i] = a[i - 1];
    }
    if (a[i] === "--discard-prev") {
      a[i] = undefined;
      a[i - 1] = undefined;
    }
  }
  return a.filter((a) => a !== undefined);
}
