const myself = {
  fname: "Shankhadeep",
  lname: "Bhadra",
};

function greetings(state, city) {
  console.log(
    `Hello My name is ${this.fname} ${this.lname} and I am from ${city} ${state}`
  );
}
let sayHello = greetings.bind(myself);
sayHello("WB", "Kolkata");

Function.prototype.myBind = function (context, ...args1) {
  var fn = this;
  return function (...args2) {
    return context.apply(fn, [...args1, ...args2]);
  };
};

let sayHello2 = greetings.myBind(myself);
sayHello("WB", "Kolkata");
