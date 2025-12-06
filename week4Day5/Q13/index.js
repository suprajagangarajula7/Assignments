let index=-1 // -1 
showData();
function saveData(){
  let n=document.getElementById("notes").value;
  if(n===""){
    document.getElementById("msg").innerHTML="please enter name";
    return;
  }
  let d=JSON.parse(localStorage.getItem("list")) || [];
  if(index===-1){
    d.push(n);
    document.getElementById("msg").innerHTML="add values";
  }
  else{
    d[index]=n;
    document.getElementById("msg").innerHTML="Data updated";
    index=-1;
  }
  localStorage.setItem("list",JSON.stringify(d));
 document.getElementById("notes").value="";
 showData();
}

function showData(){
 let d=JSON.parse(localStorage.getItem("list")) || [];
 let html="";
 for(let i=0;i<d.length;i++){
  html +=`<tr>
        <td>${i+1}</td>
        <td>${d[i]}</td>
        <td>
          <button onclick="deletData(${i})">Delete</button>
          </td>
          </tr>`;
 }
   document.getElementById("root").innerHTML=html;
 }

 function deleteData(i) {
    let d = JSON.parse(localStorage.getItem("list")) || [];
    d.splice(i, 1);
    localStorage.setItem("list", JSON.stringify(d));
    showData();
}
