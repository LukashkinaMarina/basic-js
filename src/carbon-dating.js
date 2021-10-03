import { NotImplementedError } from "../extensions/index.js";

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
export default function dateSample(n) {
  if (
    !n ||
    typeof n === "number" ||
    Array.isArray(n) ||
    isNaN(Number(n)) ||
    (isNaN(parseFloat(n)) && isFinite(n))
  )
    return false;
  const value = Math.ceil(Math.log(15 / parseFloat(n)) / (0.693 / 5730));
  return value < 0 || value === Infinity || isNaN(value) ? false : value;
}
