const numbers = [78, 190, 10, 45, 398, -2, 103, 0001, 11, 65];

function compare(a, b) {
  return a - b;
}

numbers.sort(compare);

console.log(numbers);
