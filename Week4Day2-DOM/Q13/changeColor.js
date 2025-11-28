 let colorChangebtn= document.querySelector("#colorbtn")
    let textChangebtn= document.querySelector("#textbtn")
    let colorInput= document.getElementById("color")
    let textInput= document.getElementById("textContent")
    let myDiv = document.querySelector("div");

    colorChangebtn.addEventListener("click", ()=>{
       const newColor= colorInput.value
       let test = document.createElement("div");
       test.style.backgroundColor = newColor;
       if (test.style.backgroundColor === "") {
    alert("Invalid color name!");
} else {
    myDiv.style.backgroundColor = newColor;
}
    })

    textChangebtn.addEventListener("click", ()=>{
       const newText= textInput.value
       if (newText===""){
        alert("Please enter some text!")
       }else{
       myDiv.innerText=newText;
       }
    })