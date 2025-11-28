    let uladd = document.querySelector("#myList")
    let btnadd = document.querySelector("#btn")

    btnadd.addEventListener("click", () =>{
        const newLi= document.createElement("li")

        const count= uladd.children.length+1
        newLi.textContent= "New Iteam";

        if(count%2==0){
           newLi.style.backgroundColor="red";
           newLi.style.fontStyle="italic"
        }else{
            newLi.style.backgroundColor="blue";
           newLi.style.fontWeight="bold"
        }

        uladd.appendChild(newLi);
    })