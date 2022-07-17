const user = {
  name: "Tony Stark",
};

//✅ "hasOwn" will only return true for direct properties:
Object.hasOwn(user, "name"); //return true
Object.hasOwn(user, "toString"); //return false
Object.hasOwn(user, "hasOwnProperty"); //return false

//⛔ "in" operator will return true for direct or inherited properties:
"name" in user; // returns true
"toString" in user; // returns true
"hasOwnProperty" in user; // returns true
