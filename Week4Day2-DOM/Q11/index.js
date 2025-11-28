let head= document.getElementById("header")
        head.innerText= "Welcome to the DOM World!"

        let paras= document.getElementsByTagName("p")
        for (let p of paras){
            p.style.color="blue"
        }

        let all= document.querySelector(".container")
        all.style.backgroundColor="yellow"