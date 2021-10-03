export default function renameFiles(names) {
  let arr = [];
  for (let i = 0; i < names.length; i++) {
    let count = 1;
    if (!arr.includes(names[i])) {
      arr.push(names[i]);
    } else if (arr.includes(names[i])) {
      while (arr.includes(names[i] + "(" + count + ")")) {
        count++;
      }
      arr.push(names[i] + "(" + count + ")");
    }
  }
  return arr;
}
