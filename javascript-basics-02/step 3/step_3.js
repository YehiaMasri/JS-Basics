function change_text(){
  let o = document.getElementById("name").value;
  document.getElementById("text").innerHTML=o;
}
let p =document.querySelector("#name").onchange=function(){change_text()};