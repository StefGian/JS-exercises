const display = document.querySelector("#container");
const btnNext = document.querySelector("#next");
const btnPrevious = document.querySelector("#prev");

let counter = 0;

btnNext.addEventListener("click", nextPicture);
btnPrevious.addEventListener("click", previousPicture);

var images = ["china.jpg", "turkey.jpg", "london.jpg", "budapest.jpg", "morocco.jpg", "amsterdam.jpg"];

function nextPicture(){
  if(counter === 5){
    counter = 0;
  }
  counter++;

  display.style.backgroundImage = `url(image-${counter}.jpg)`;
};

function previousPicture(){
  if(counter === 0){
    counter = 5;
  }
  counter--;

  display.style.backgroundImage = `url(image-${counter}.jpg)`;
};