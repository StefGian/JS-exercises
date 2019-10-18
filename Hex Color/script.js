const bodyBgc = document.querySelector("body");
const button = document.querySelector("button");
const span = document.querySelector("span");

//var colors = ["#390071", "#00ff71", "#a95292", "#800080", "#0000ff", "#89a203"];

button.addEventListener("click", changeColor);

// function changeColor(){
//   let randomColor = Math.floor(Math.random()*colors.length);
//   bodyBgc.style.backgroundColor = colors[randomColor];
//   span.textContent = colors[randomColor];
// };

//generating random hex colors

var hexNums = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

function changeColor(){
  let hexColor = "#";

  for(let i = 0; i < 6; i++){
    let random = Math.floor(Math.random()* hexNums.length);
    hexColor = hexColor + hexNums[random];
  };
  bodyBgc.style.backgroundColor = hexColor;
  span.textContent = hexColor;
};


