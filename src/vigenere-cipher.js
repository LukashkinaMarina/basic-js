export default class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }

  process(text, key, decode) {
    if (!text || !key) throw new Error("Incorrect arguments!");
    const prepareReg = /[^A-Z\!\@\#\$\(\)\,\.\/\|\*\-\&\^\%\s\:0-9]/g;
    const secondReg = /[A-Z]/g;
    const calcCode = (value) => value.charCodeAt(0) - 65;
    const prepare = (value) => value.toUpperCase().replace(prepareReg, "");
    let i = 0;
    let b;
    key = prepare(key);
    let value = prepare(text).replace(secondReg, (a) => {
      b = key[i++ % key.length];
      return String.fromCharCode(
        ((calcCode(a) + (decode ? 26 - calcCode(b) : calcCode(b))) % 26) + 65
      );
    });
    if (!this.direct) {
      value = value.split("").reverse().join("");
    }
    return value;
  }

  encrypt(text, key) {
    return this.process(text, key);
  }
  decrypt(enc, key) {
    return this.process(enc, key, true);
  }
}
