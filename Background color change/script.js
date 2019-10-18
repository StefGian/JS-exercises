const colorBtn = document.querySelector("button");
const bodyBgc = document.querySelector("body");

var colors = ["purple", "pink", "orange", "red", "tomato", "yellow", "yellowgreen", "green"];

colorBtn.addEventListener("click", changeColor);

function changeColor(){
  let random = Math.floor(Math.random()*colors.length);
  bodyBgc.style.backgroundColor = colors[random];
};