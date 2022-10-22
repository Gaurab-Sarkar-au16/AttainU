function add(num1,num2){
  console.log('calculating sum')
  return num1 + num2
}

function subtract(num1,num2){
  console.log('calculating difference')
  return num1 - num2
}

function specialFunction(passedValue) {
  console.log('This is coming from apecialFunction')
  
  console.log('passedValue is: ', passedValue)

  // console.log(passedValue + 10)
  // console.log('passedValue became :', passedValue)

  var result = passedValue(30,40)
  console.log(result)
}

var sum = add(10,20)
console.log(sum)//30

// specialFunction(123)
// specialFunction(20)
specialFunction(add)

// Array Methods
//=================
var arr = [1,3,4,5]
for(var index=0; index<arr.length; index++){
  console.log(arr[index])
}

//forEach: accepts a call back function
function abc() {
  console.log("Executing")
}
arr.forEach(abc)
// forEach passes some parameters to callback function
function abcd(element, index, myArr) {
  console.log('Element',element)
  // console.log('Index',index)
  // console.log('Array',myArr)
}
arr.forEach(abcd)

//checking if divisible by 2 using for each
var numbers = [55,12,30,2,300,555,65,88]
//defining the function in the parmeter itself
numbers.forEach(function(item, index, originalArray){
  // console.log(item)
  if (item % 2 === 0){
    console.log(item + " is an even number")
  } else {
    console.log(item + " is an odd number")
  }
})

// Every function returns by default undefined unless and until defined otherwise
// for each function returns undefined every time

var mapResult = numbers.map(function(item, index, originalArray){
  var square = item * item
  return square
})
console.log(mapResult)
// diff between forEach and map is that map returns an array 
// map doesnot changes the original array, forEach changes the original array

// OBJECTS
// its representation of real wrld object, object are key value pairs
var person = {
  name: 'Gaurab',
  age: 50,
  sayHello: function(){
    console.log('Hello')
  }
}

person.sayHello()

// another way of defining objects using functions, we will call them constructor functions, we ues capital letter name to denote them

function Person(passedName,passedAge){
  return{
    name: passedName,
    age: passedAge
  }
}
var abc = new Person("Yash", 50)
// new keyword suggest javascript its a constructor function, meaning its creating an object for us
console.log(abc)