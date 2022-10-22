// Switch statement
var userOption = "A";

switch (userOption) {
  case "A":
    console.log("User chose option A");
    break;

  case "B":
    console.log("User chose option B");
    break;

  case "C":
    console.log("User chose option C");
    break;

  default:
    console.log("User chose an invalid option");
}

// Functions
// function declaration
// also known as name function
function myFunction(param1, param2){
  return param1*param2
}
myFunction(10, 20)

// function expression
// logic of afunction is being saved in the variable
var add = function(num1, num2){
  return num1 + num2
}
console.log(add(20, 30))

// Scopes 
var naam = 'Gaurab'//this will be available in the window object

function displayName() {
  var naam = 'Test'
  console.log(naam)//function scope
  console.log(window.name)//global scope
}

displayName()

// Array or Lists
var list = [1,2,3]
var mixedList = [1,2,3,"Name","Text"]
/*
Multiple functions and properties are attached on an array
*/
console.log(list.length)//property
console.log(list.reverse())//function

list.push(10)
console.log(list)

list.pop()
console.log(list)

list.unshift(20)
console.log(list)

list.shift()
console.log(list)

// nested list
var nestList = [123, 12, 23, [1,3]]
list.length // 4
// list[3].length // 2

// list.splice()

// Callback functions
function specificFunction(params){
  console.log('This is coming fom the funcion named specificFunction')
}

function anyFunction(params){
  console.log('This is coming fom the funcion named anyFunction')
  console.log('params is', params)
  params()

}

anyFunction(specificFunction)

//passing the function as a prameter to another function, the function which is passed is known as call back function 

// Anonymous function
// function which is unspecified
var multiply = function(num1, num2){
  return num1 * num2
}
// the abbove funcion doesnot have a name, the variable in which it is stored is named, these are known as anonymous functiions

// we can pass anonymous to another function, also it is acting as call back function in this case
anyFunction(function() {
  console.log('Anonymous Function')
})

// variation in prompt, you have a pre defined value
prompt('Enter Number', 123)

window.open('https://google.com')
// window.close()