const button = document.querySelector("button");
const image = document.querySelector("img");
const name = document.querySelector("#personName");
const quote = document.querySelector("p");

const quotes = [
  {
    name: "Albert Einstein",
    quote: "Learn from yesterday, live for today, hope for tomorrow. The important thing is not to stop questioning.",
    image: "einstein.jpg"
  },

  {
    name: "Confucius",
    quote: "It does not matter how slowly you go, so long as you do not stop.",
    image: "confucius.jpg"
  },

  {
    name: "Winston Churchill",
    quote: "Success is walking from failure to failure with no loss of enthusiasm.",
    image: "churchill.jpg"
  },

  {
    name: "Mahatma Gandhi",
    quote: "Live as if you were to die tomorrow. Learn as if you were to live forever.",
    image: "gandhi.jpg"
  },

  {
    name: "John D. Rockefeller",
    quote: "Don't be afraid to give up the good to go for the great",
    image: "rockefeller.jpg"
  }
];


button.addEventListener("click", showQuote);

function showQuote(){
  let random = Math.floor(Math.random()*quotes.length);
  image.src = quotes[random].image;
  name.innerHTML =quotes[random].name;
  quote.innerHTML = '"' + quotes[random].quote + '"';
};