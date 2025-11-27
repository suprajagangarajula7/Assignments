const timer=(duration,onComplete)=>{
    setTimeout(()=>{
        onComplete(`Timer of ${duration}ms finished`)
    },duration)
}
const onComplete=(message)=>{
    console.log(message);
}
timer(2000,onComplete);