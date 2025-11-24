const greet = (name) => {
  return name ? `Hello, ${name}` : "Hello, Guest";
};
console.log(greet("Sam")); 
console.log(greet()); 