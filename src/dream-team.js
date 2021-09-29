import { NotImplementedError } from "../extensions/index.js";

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(dream) {
  let x = [];
  if (!dream) return false;
  for (let i = 0; i < dream.length; i++) {
    if (typeof dream[i] === "string") {
      x.push(dream[i]);
    }
  }
  let name = x
    .map((e) => e.split(" ").join("").slice(0, 1).toUpperCase())
    .sort()
    .join("");
  return name;
}
