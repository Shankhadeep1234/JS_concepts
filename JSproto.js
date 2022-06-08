function Student(name, age) {
  (this.name = name), (this.age = age);
}

let student1 = new Student("John", 32);
let student2 = new Student("Mary", 23);

console.log(student1);
console.log(student2);

student1.sports = "Football";

//adding property to the prototype of the Student
//this would add the gender property to all the
//existing object instance of the Student object
//and would initialize it to null
Student.prototype.gender = null;

// although student3 is created with name and age
// initialized but the gender property would also
//be attached to it and assigned as null because
//of the above mentioned line of code.
let student3 = new Student("Anna", 26);
