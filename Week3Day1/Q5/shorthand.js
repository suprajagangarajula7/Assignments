//Create a variable username and course and print: "Hello , welcome to the course!" using template literals.

var username="Ani"
var course="Advance JavaScript"
console.log(`Hello ${username} , welcome to ${course} course!`)

//Shorthand
const name = "Sam";
const age = 21;

const student = {
  name,
  age,
  greet() {
    console.log("Hello");
  }
};
console.log(student.name); 
console.log(student.age);

//Create a function getFullName(first, last) using arrow function shorthand (no return keyword).
const getFullName= (first, last)=> `${first} ${last}`
console.log(getFullName("Sam", "Smith"));