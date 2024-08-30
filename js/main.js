

const button = document.getElementById("btn");
const list   = document.getElementById("list");

const button2 = document.getElementById("btn-2");
const list2   = document.getElementById("list-2");

list.style.display ="none";
list2.style.display ="none";

button.addEventListener("click", (event) => {
  if(list.style.display == "none"){
    list.style.display ="block";
  } else {
    list.style.display ="none";
  }
})

button2.addEventListener("click", (event) => {
  if(list2.style.display == "none"){
    list2.style.display ="block";
  } else {
    list2.style.display ="none";
  }
})
