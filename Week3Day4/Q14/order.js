console.log("Begin");
setTimeout(() => {
    console.log("Timeout Task");
}, 0);
Promise.resolve().then(() => {
    console.log("Promise Task");
});
console.log("End");

//output appears in this order because synchronous code runs first and also line by line. so "begin" and "end" are print on after other.
//Promise callback goes to micro queue and always runs after synchronous tasks run before timer.
//so we get promise task after "end"
//setTimeout goes to macro task queue and run after promise is completed so thats why it is executed last.