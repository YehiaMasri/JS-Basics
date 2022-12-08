
function reset() {
  var a = confirm("Are you sure you want to reset all text?");
  if (a == true) {
       document.getElementById("name").value = "";
       document.getElementById("surname").value = "";
       document.getElementById("city").value = "";      
  }
} 
  document.querySelector("button").onclick=function(){reset()}