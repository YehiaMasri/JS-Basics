function operater(){
  let x=document.getElementById("shoe_size").value;
  let y=document.getElementById("year").value;
  let z= (((x*2)+5)*50)-y+1766;
  alert("the number is: "+ z);
}
document.getElementById("validate").onclick=function(){operater()};