function printReverse(someArray){
  var newArray = new Array;
  for(var i = someArray.length-1; i>=0; i--){
  newArray.push(someArray[i]);
  }
  return newArray;
}

function isUniform(anArray){
  var firstElement = anArray[0];
  for(var i = 1; i < anArray.length; i++){
    if(anArray[i] !== firstElement){
      return false;
      }
    }
    return true;
  }
  
function sumArray(anArray){
  var sum = 0;
  anArray.forEach(function(element){
    sum += element;
  });
  return sum;
}

function max(array){
  var max = array[0];
  for(var i = 0; i < array.length; i++){
    if(array[i] > max){
      max = array[i];
    }
  }
  return max;
}