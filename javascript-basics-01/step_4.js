
// let Name = prompt("enter your name")
// let surname =prompt ("enter your last name")
// let city = prompt("enter your city ")
// alert("Hello "+ Name + " " +surname+ " " + "you are living in " + city);
// document.getElementById("validate").onclick=function() {}
function yahya(){
  let n = document.getElementById("name").value;
  let s = document.getElementById("surname").value;
  let c =document.getElementById("city").value;
  alert("your name is: "+n+" "+s+ " and you are living in "+c);
}
document.getElementById("validate").onclick=function() {yahya()};
