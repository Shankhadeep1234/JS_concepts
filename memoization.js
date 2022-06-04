const memoizeAdd = () => {
  let cache = {};
  return (value) => {
    if (value in cache) {
      console.log("Fetching from Cache");
      return cache[value];
    } else {
      console.log("Calculating value");
      let result = value + 20;
      cache[value] = result;
      return result;
    }
  };
};

// const addition = memoizeAdd(20);
// console.log(addition(20));

//another example
let cache = {};
const memoizeAddTo80 = (n) => {
  if (n in cache) {
    console.log("Getting from cache");
    return cache[n];
  } else {
    console.log("calculating....");
    cache[n] = n + 80;
    return cache[n];
  }
};

console.log(memoizeAddTo80(5));
console.log(memoizeAddTo80(5));
