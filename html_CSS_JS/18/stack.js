var inputElement = document.getElementById('userInput')
var pushBtn = document.getElementById('pushBtn')
var popBtn = document.getElementById('popBtn')
var stackContainer = document.getElementById('stack') 

var stackArray = []

function pushToStack(){
  var inputValue = inputElement.value
  stackArray.push(inputValue)  
  // console.log('inputValue:',inputValue,'newArray:',stackArray) 
  updateStackArray() 
}

function popFromStack(){
  stackArray.pop()
  // console.log(stackArray)
  updateStackArray()
}

function updateStackArray() {
  var spanElements = stackArray.map(function(item){
    return '<span>'+ item +'</span>'
  })
  // console.log(spanElements)

  stackContainer.innerHTML = spanElements

  // console.log(stackContainer)
}

pushBtn.addEventListener('click', pushToStack)
popBtn.addEventListener('click', popFromStack)

