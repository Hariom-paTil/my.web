
document.querySelector(".dog").onclick = function(){
    alert('Dog');
}
document.querySelector(".cat").onclick = function(){
    alert('Cat');
}
document.querySelector(".tiger").onclick = function(){
    alert('tiger');    
}
document.querySelector(".monkey").onclick = function(){
    alert('monkey');
}

let click = document.querySelector(".clickme"); 
let mode = "light"; 

click.addEventListener("click", () => { 
  if (mode === "light") {
    document.querySelector("body").style.backgroundColor = "black";
    mode = "dark"; 
  } else {
    document.querySelector("body").style.backgroundColor = "white";
    mode = "light";
  }
});