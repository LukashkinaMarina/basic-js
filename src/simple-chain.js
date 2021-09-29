import { NotImplementedError } from "../extensions/index.js";

/**
 * Implement chainMaker object according to task description
 *
 */
export default {
  arr: [],
  getLength() {
    return this.arr.length;
  },
  addLink(value) {
    let newValue = value;
    if (newValue === undefined) {
      this.arr.push("( )");
    }
    if (String(newValue) === "function () {}") {
      newValue = "function () { }";
    }
    this.arr.push(`( ${newValue} )`);
    return this;
  },
  removeLink(position) {
    if (
      position === 0 ||
      !Array.isArray(this.arr) ||
      typeof this.arr[position] === "undefined"
    ) {
      this.arr = [];
      throw new Error(`You can't remove incorrect link!`);
    }
    const val = this.arr[position - 1];
    this.arr = this.arr.filter((e, i) => position - 1 !== i);
    return this;
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    const value = this.arr.join("~~");
    this.arr = [];
    return value;
  },
};
