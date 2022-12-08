function change_text(){
  let o = document.getElementById("name").value;
  document.getElementById("text").innerHTML=o;
}
document.querySelector("#name").oninput=function(){change_text()};