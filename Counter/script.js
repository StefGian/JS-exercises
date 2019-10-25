let counter = document.querySelector("#counter");
const btnDecrease = document.querySelector("#btn1");
const btnIncrease = document.querySelector("#btn2");

let count = 0;

btnIncrease.addEventListener("click", increaseNum);
btnDecrease.addEventListener("click", decreaseNum);


function increaseNum(){
  count++;
  counter.innerHTML = count;
  if(counter.innerHTML > "0"){
    counter.style.color = "rgb(47, 202, 0)";
  }else if(counter.innerHTML === "0"){
    counter.style.color = "white";
  }
};

function decreaseNum(){
  count--;
  counter.innerHTML = count;
  if(counter.innerHTML < "0"){
    counter.style.color = "red";
  }else if(counter.innerHTML === "0"){
    counter.style.color = "white";
  }
};