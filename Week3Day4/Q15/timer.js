let totalSeconds = parseInt(prompt("Enter countdown time in seconds:"));
let countdown = totalSeconds;

let intervalId = setInterval(() => {
    console.log(countdown);
    countdown--;

    if (countdown < 0) {
        clearInterval(intervalId);
        console.log("Countdown Complete!");
    }
}, 1000);

function checkStopKey() {
    document.addEventListener("keydown", (event) => {
        if (event.key.toLowerCase() === "s") {
            clearInterval(intervalId);
            console.log("Countdown Stopped by User!");
        }
    });
}
setTimeout(checkStopKey, 500);
