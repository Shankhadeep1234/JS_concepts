function privateCounter() {
  let count = 0;
  return {
    increment: function (value) {
      count += value;
    },
    retrieve: function () {
      return count;
    },
  };
}

let counter = privateCounter();
counter.increment(5);
counter.increment(5);
console.log(counter.retrieve());
