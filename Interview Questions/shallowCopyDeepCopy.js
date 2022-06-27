let obj1 = {
  name: "abc",
  city: {
    street: "GLT road kol-36",
  },
};

//normal copy
// let obj2 = obj1;
// obj2.name = "dfg";
// console.log("For Obj 1", obj1);
// console.log("For Obj 2", obj2);

//shallow copy
//let obj2 = Object.assign({}, obj1);
//or
// let obj2 = { ...obj1 };
// obj2.name = "dfg";
// obj2.city.street = "Baguiati Road kol-41";
// console.log("For Obj 1", obj1);
// console.log("For Obj 2", obj2);

//deep copy
let obj2 = JSON.parse(JSON.stringify(obj1));
obj2.name = "dfg";
obj2.city.street = "Baguiati Road kol-41";
console.log("For Obj 1", obj1);
console.log("For Obj 2", obj2);
