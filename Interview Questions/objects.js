let person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};

//log all keys
for (let key in person) {
  if (person.hasOwnProperty(key)) {
    console.log(key);
  }
}

//log all values
for (let key in person) {
  if (person.hasOwnProperty(key)) {
    console.log(person[key]);
  }
}
//---------------------------------
for (let key of Object.values(person)) {
  console.log(key);
}

//check to see is obj empty or not
function isObjectEmpty(obj) {
  if (obj !== null && obj !== undefined && typeof obj === "object") {
    return Object.keys(obj).length === 0 && JSON.stringify(obj) === "{}";
  }
  return false;
}

console.log(isObjectEmpty(person));
