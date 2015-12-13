"use strict";

var i = 180; //3分固定
function count(){
  if(i <= 0){
    document.getElementById("output").innerHTML = "完成!";
  }else{
    document.getElementById("output").innerHTML = i + "s";
  }
  i -= 1;
}
window.onload = function(){
  setInterval("count()", 1000);
};

var newElement = document.createElement("div");
document.body.appendChild(newElement);

var element = document.body.childNodes[0];
document.body.removeChild(element);
