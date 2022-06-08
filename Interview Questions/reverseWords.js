//REVERSE WORDS BY POSITION
function reverseWordByPosition(str) {
  return str.split(" ").reverse().join(" ");
}

console.log(reverseWordByPosition("JavaScript is awesome"));

//reverse only words keeping the position intact
function reverseWordByStaticPos(str) {
  return str
    .split(" ")
    .map((char) => char.split("").reverse().join(""))
    .join(" ");
}

console.log(reverseWordByStaticPos("I am Shankhadeep"));
