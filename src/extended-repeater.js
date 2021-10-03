import { NotImplementedError } from "../extensions/index.js";

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 *
 */
export default function repeater(string, times) {
  return Array(times.repeatTimes)
    .fill(
      string +
        Array(times.additionRepeatTimes)
          .fill(times.addition !== undefined ? String(times.addition) : "")
          .join(times.additionSeparator || "|")
    )
    .join(times.separator || "+");
}
