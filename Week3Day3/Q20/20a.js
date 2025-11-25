function createCounter(){
  let count=0;
  function increment(){
    count++
    console.log("Current count:", count);
  }
  function decrement(){
    count--
    console.log("Current count:", count);
  }
  return{increment,decrement}
}

const counter = createCounter();
counter.increment(); 
counter.increment(); 
counter.decrement(); 

///taska
//A closure happens when an inner function remembers variables from its outer function—even after the outer function has finished executing.
//What Happens if Multiple Counters Are Created?
// Everytime when createCounter() is called it creates a new independent closure, meaning each counter has its own private copy of count.
//so everytime we are getting different values of count. 