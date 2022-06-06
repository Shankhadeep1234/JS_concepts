function multiply(x, y) {
  return x * y;
}

let multiplyByTwo = multiply.bind(this, 2);
console.log(multiplyByTwo(2));

const multiplyByClosure = (a) => {
  return (b) => {
    return (c) => {
      console.log(a * b * c);
    };
  };
};

multiplyByClosure(2)(2)(2);
