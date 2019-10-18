const buttonOn = document.querySelector("#on");
const buttonOff = document.querySelector("#off");
const bulb = document.querySelector("img");

buttonOn.addEventListener("click", turnOn);
buttonOff.addEventListener("click", turnOff);

function turnOn(){
  if(bulb.src = "bulbOff.png"){
    bulb.src = "bulbOn.png";
  }
};

function turnOff(){
  if(bulb.src = "bulbOn.png"){
    bulb.src = "bulbOff.png";
  }
};