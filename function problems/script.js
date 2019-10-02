function isEven(number) {
  if(number % 2 !== 0){
    return false;
  }else {
    return true;
  }
};

function kebabToSnake(string){
  var newString = string.replace(/-/g, "_");
  return newString;
}