// Use of let const and var
//============================
// var name = "Yash"
// console.log(name)

// let name = "Yash"
// console.log(name)
// name = "Goku"
// console.log(name)

// const name = "Goku"
// console.log(name)
// name = "Vijay"
// console.log(name)

// const arr = ['Yash', 'Goku']
// console.log(arr)
// arr[0] = 'ES6'
// console.log(arr)

// const arr = ['Yash', 'Goku']
// console.log(arr)
// let arr = 'ES6'
// console.log(arr)

// function x(){
//   var abc = 123
//   console.log(abc)
//   {
//     var abc = "Yash"
//     console.log(abc)
//     {
//       var abc = 80
//       console.log(abc)
//     }
//   }
// }
// x()

// function x(){
//   let abc = 123
//   console.log(abc)
//   {
//     let abc = "Yash"
//     console.log(abc)
//     {
//       const abc = 80
//       console.log(abc)
//     }
//   }
// }
// x()

// Template literals
//====================

// let firstName = "Gaurab"
// let lastName = "Sarkar"
// const fullName = firstName+" "+lastName
// console.log(fullName)

// const fullName2 = `The name of the person is ${firstName} ${lastName}`
// console.log(fullName2)

// //you can write an expression inside

// let a = 10
// let b = 20
// console.log(`The sum of the numbers is ${a+b}`)

// New string methods
//======================
// const str = "This is a very long sentence";
// console.log(str.startsWith("This"));
// console.log(str.endsWith("ce."));
// console.log(str.includes("very"));
// console.log(str.includes("very", 13));
// console.log(str.repeat(2))
// console.log('a'+'r'.repeat(10)+'!')

// Arrow Functions
//=================
function x(a,b){
  return a*b
}

const add = function(num1,num2){
  return num1 + num2
}

const addArrowFunction = (num1,num2) => {
  return num1+num2
}

const addArrowFuncShort = (num1,num2) => num1+num2
//works only when only one line expression, it automaticcally returns

//if we have one parameter
const square = num1 => num1**2

console.log(add(10,5))
console.log(square(3))

const arr = [19,20,30]
const squaredArr1 = arr.map(function(item){
  return item**2
})
console.log(squaredArr1)

const squaredArr2 = arr.map(item => item**2)
console.log(squaredArr2)

// Destructuring
//================

const person = {
  firstName: 'Vijay',
  lastName: 'Sinha',
  age: 80,
  mobile: 000222233,
  profession: 'coder',
}

function greeter(personObj){
  // const fName = personObj.firstName
  // const lName = personObj.lastName

  //destructuring object
  const {firstName, lastName} = personObj

  const {} = 
  console.log(`Hello, I am ${firstName.toUpperCase()} ${lastName.toUpperCase()}`)

  //destructuring array
  const array = [1,2,3]
  let [firstItem, ,thirdItem] = array
  console.log(firstItem, thirdItem)
  
}



greeter(person)

