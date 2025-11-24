//1. Template Literals + Expressions
//a)  Print: "5 + 7 = 12" using a template literal where the result is calculated inside ${ }.
let a=5, b=7;
const sum = (a,b)=> a+b; 
console.log(`${a}+ ${b}= ${a+b}`)

//b)  Create a multi-line string using template literals (3 lines).
const message = `Hello, this is line 1.
This is line 2.
And this is line 3.`;
console.log(message);

//c)Given firstName = "John" and lastName = "Doe", print the full name using a template literal.
let firstName = "John"
let lastName = "Doe"
console.log(`Full name is ${firstName} ${lastName}`)


///2. Arrow Functions & this
//a) Convert this function into an arrow function:
const square= n => n*n; 
console.log(square(3))

//b)Arrow functions do not have their own this so we get an error as undefined. To avoid this we can write a function inside the object.

//c  Rewrite 
const obj = {
  value: 50,
  test: function() {
    console.log(this.value);
  }
};
obj.test();

//3.Rest, Spread & Copying Objects
//a) Use spread to make a shallow copy of this object:
const product = { name: "Pen", price: 10 };
const final = {...product}
console.log(final)

//b)) Merge these two objects using spread:
const a = { x: 1 };
const b = { y: 2 };
const merge= {...a, ...b}
console.log(merge)


//c) Write a function maxValue(...nums) (rest operator) that returns the largest number.
const maxValue = (...nums) => Math.max(...nums);
console.log(maxValue(1, 5, 3, 9, 2)); 
console.log(maxValue(10, 20, 5));

//4. Destructuring & Optional Chaining
//a)Destructure to extract a and b:
const arr = [10, 20, 30];
const [a, b] = arr;
console.log(a); 
console.log(b);

//b)Destructure the object to extract brand:
const laptop = { brand: "Dell", ram: "8GB" };
const {brand}=laptop;
console.log(brand);

//c)Safely access the following using optional chaining:
const info = {};
console.log(info.user?.name);

//5. Scoping (let/var/const)
//a) In this code the output will be 3 as the var scope is fiunctional and global and not block scope
//b) In this code the output will be ReferenceError: j is not defined because we are adding another block {} which will change the block and will give error as undefined because let will have block scope
//c)Once a variable is declared with const, you cannot reassign it to a different value.So, you can change properties of objects declared with const, but you cannot reassign the object itself.

//6. Ternary Operator – Practice
//a)Ternary Operator
let kmph = 70; 
let speed = kmph > 60 ? "Fast" : "Normal";
console.log(speed); 

//b) 
let age = 20
let status = age>= 18? "Adult":"Minor"
console.log(status)

//cWrite a ternary to check: Positive → "Positive" Zero → "Zero" Negative → "Negative" (Hint: use nested ternary)
const num= -5
const result= num >0 ? "Positive" :(num===0?"Zero":"Negative")
console.log(result)

//7.  Spread, Rest & Arrays
//a)Add
const nums = [1,2,3];
const add= [...nums, 4,5]
console.log(add)

//b)Combine these arrays using spread:
let a = ["x","y"];
let b = ["z"];
let c= [...a, ...b]
console.log(c)

//c) Write a function using rest: printNames("A","B","C") → returns ["A","B","C"].
function printNames(...names) {
  return names;
}
console.log( printNames("A","B","C"))

//8. Object Destructuring & Shorthand
//a)
const user = { id: 101, status: "active" };
const {id, status}=user
console.log(id)
console.log(status)

//b
const id = 101;
const role = "admin";
const user = { id, role };
console.log(user);

//c)
const name = "Alice";
const age = 25;
const person = {
  name,    
  age,    
  greet() { 
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
};
console.log(person.name); 
console.log(person.age);  
person.greet(); 


//9. 
//a) 
const today = new Date().toDateString();
console.log(`Today's date is: ${today}`);
console.log(`Today's date is: ${new Date().toDateString()}`);

//b)
const name = "John";
const score = 85;
console.log(`Hello ${name}, your score is ${score}/100`);

//10. 
//a) 
const add = (a, b) => a + b;

//b) 
const isAdult = age => age >= 18;

//c) 
const double = n => n*n; 
console.log(double(2))

//11 
//a 
const arr = [1, 2, 3];
const clone = [...arr];
console.log(clone);

//b) 
const arr = [1, 2, 3];
const clone = [100,...arr];
console.log(clone);

//c)
const obj1 = { id: 1, name: "Alice" };
const obj2 = { name: "Bob", role: "admin" };
const mergeObj = {...obj1, ...obj2}
console.log( mergeObj)

//12 
//a) 
const user = {
  name: "Alex",
  address: {
    city: "Bangalore"
  }
};
const city = user?.address?.city;
console.log(city);

//b) 
const user = {
  name: "Alex",
  address: {
    city: "Bangalore"
  }
};
const title= user?.job?.title;
console.log(title)

//c) 
//without optional chaining
const user = {};
console.log(user.profile.name); 
//with optional chaining
const user = {};
console.log(user.profile?.name); 





