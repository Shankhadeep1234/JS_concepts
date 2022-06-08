//loops
function reverserStr(str) {
  let reverse = "";
  for (let character of str) {
    reverse = character + reverse;
  }
  return reverse;
}

console.log(reverserStr("I am Shankhadeep"));

//split reverse join
function reverseStr2(str) {
  return str.split("").reverse().join("");
}

console.log(reverseStr2("I am Shankhadeep"));
