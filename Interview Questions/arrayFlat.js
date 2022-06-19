var input = [
  1,
  2,
  3,
  [4],
  [5, 6, [7], [8, [9, [10]]]],
  11,
  12,
  13,
  [14, [[[[[15, [16]]]]]]],
  17,
  18,
  [19, [20, [21, [22, [23, [24, [[[[[25]]]]]]]]]]],
];

/*
pseudo code
loop over the array : 0 - array.length
if current element is an array 
   do some computation
else
   return current element   
*/

function flatten() {
  const output = [];

  function processing(arr) {
    for (let i = 0; i < arr.length; i++) {
      var currentElement = arr[i];

      if (Array.isArray(currentElement)) {
        processing(currentElement);
      } else {
        output.push(currentElement);
      }
    }
  }
  processing(this);

  return output;
}

Array.prototype.flatten = flatten;

const flatArr = input.flatten();
console.log(flatArr);
