const displayMessage=(name)=>{
    console.log(`hello, ${name}!`);
}

const getUserInput=(callback)=>{
    console.log("Fetching username...");

setTimeout(()=>{
    const username="Alice"
    callback(username)
}, 1000);
}

getUserInput(displayMessage);