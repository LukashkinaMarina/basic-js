import { NotImplementedError } from "../extensions/index.js";

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
export default function getDNSStats(domains) {
  let arr = {};
  for (let i = 0; i < domains.length; i++) {
    const arr1 = domains[i].split(".");
    arr1.reverse();
    let key = "";
    for (let j = 0; j < arr1.length; j++) {
      key += "." + arr1[j];
      if (Object.keys(arr).includes(key)) {
        arr[key]++;
      } else {
        arr[key] = 1;
      }
    }
  }
  return arr;
}
