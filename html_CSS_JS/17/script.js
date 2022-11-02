var todoList = document.getElementById('todo-list')
// console.log(todoList)
var inputField = document.getElementById('input-field')
var addTodoButton = document.getElementById('add-todo')

function removeItem(e){
  console.log(e.target.parentElement)
}

function addItemToList(event) {
  var inputText = inputField.value

  // var todoListHTML = todoList.innerHTML
  // var newTodoListHTML = todoListHTML + '<li>'+ inputText +' <button>x</button>'+'</li>'
  // // var newTodoListHTML = `${todoListHTML}<li>${inputText} <button>x</button></li>`  
  // // console.log(newTodoItem)
  // todoList.innerHTML = newTodoListHTML

  //creating remove button
  var removeButton = document.createElement('button')
  removeButton.innerText = "X"
  removeButton.addEventListener('click', removeItem)
  
  //creating new li tag
  var newLiTag = document.createElement('li')
  newLiTag.innerText = inputText

  //appending remove button element to the <li> that was created above
  newLiTag.appendChild(removeButton)

  //appending the new <li> with the button in it to the todo list
  todoList.appendChild(newLiTag)

  

  console.log(newLiTag)
} 

addTodoButton.addEventListener('click', addItemToList)
