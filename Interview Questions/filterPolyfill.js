var logicAlbums = [
  {
    name: "Bobby Tarantino",
    rating: 5,
  },
  { name: "The Incredible True Story", rating: 4.5 },
  {
    name: "Supermarket",
    rating: 4.9,
  },
  { name: "Under Pressure", rating: 5 },
];

let filteredAlbums = logicAlbums.filter((album) => {
  return album.rating > 4.9;
});
console.log("From inbuilt filter", filteredAlbums);

//polyfill
Array.prototype.myFilter = function (callback, context) {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    if (callback.call(context, this[i], i, this)) {
      arr.push(this[i]);
    }
  }
  return arr;
};

let filteredAlbum2 = logicAlbums.myFilter(function (album) {
  return album.rating > 4.9; // providing the context here
});
console.log("From filter polyfill", filteredAlbum2);
