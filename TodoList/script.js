var todos = [];

var input = prompt("What would you like to do?");


while(input !== "quit"){
  if(input === "list"){
    listTodos();
  }else if (input === "new"){
    addNewTodo();
  } else if(input === "delete"){
    deleteTodo();
  }
  input = prompt("What would you like to do?");
}

console.log("You QUIT THE APP");

function listTodos(){
  console.log("********************");
  todos.forEach(function(todo, index){
   console.log(index + ": " + todo);
  });
  console.log("********************");
};

function addNewTodo(){
  var newTodo = prompt("Enter new todo");
  todos.push(newTodo);
  console.log("Added Todo");
};

function deleteTodo(){
  var indexTodo = prompt("Enter index of Todo to delete");
  todos.splice(indexTodo, 1);
  console.log("Deleted Todo");
};