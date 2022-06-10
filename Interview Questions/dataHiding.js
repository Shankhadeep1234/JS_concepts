//closure example
function outest() {
  var a = 10;
  return function outer(b) {
    return function inner() {
      var c = 20;
      console.log(a, b, c);
    };
  };
}

let closure = outest()("Hello world")();

//data hiding encapsulation
function counter() {
  var count = 0;
  return function incrementCount() {
    count++;
    console.log(count);
  };
}
var counter1 = counter();
counter1();
