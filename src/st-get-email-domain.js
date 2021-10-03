import { NotImplementedError } from "../extensions/index.js";

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
export default function getEmailDomain(email) {
  let newArr = email.split("");
  let value = newArr.filter(
    (e, index) => !(index < newArr.lastIndexOf("@")) && e !== "@"
  );
  return value.join("");
}
