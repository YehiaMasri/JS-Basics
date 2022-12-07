function age(){
  let x = document.getElementById("age").value;
  if (x=>18){
    alert("you are over age");
  }
  else
  {
   alert("you are under age ") ;
  }
}
document.getElementById("validate").onclick=function() {age ()};