var myArray = ["Hulk", "Ruben", "John", "Nano"];

//for forEach
Array.prototype.eachFor = function (callback) {
  for (var i = 0; i < this.length; i++) {
    callback(this[i], i, this); //currentValue, index, array
  }
};

myArray.eachFor(function (word) {
  console.log(word);
});

//for map
Array.prototype.myMap = function (callback) {
  var arr = [];
  for (var i = 0; i < this.length; i++) {
    arr.push(callback(this[i], i, this)); //currentValue, index, array
  }
  return arr;
};
