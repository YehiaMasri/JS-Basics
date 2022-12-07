function bye(){
  alert("Thank you for participating!");
}
let r = document.querySelector("input").onblur=function(){bye()};
