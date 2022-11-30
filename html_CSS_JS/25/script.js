//synchronous
function displayNumbers(times){
  for(let i = 0; i<times; i++){
    console.log(i)
  }
}
console.log('Starting')
displayNumbers(5)
console.log('Finished')

//asynchronous
console.log('Starting')
setTimeout(()=>displayNumbers(5), 5000)
console.log('Finished')

//call by value, call by reference
const obj = {
  name:"vijay"
}
const obj2 = {
  age:23,
  nested:obj
}

//call by value
let abc = 123
function xyz(params){
  params = "hgv"
  console.log(abc)
  console.log(params)
}
xyz(abc)

//call by refernce
function xyz2(params){
  console.log(obj)
  console.log(obj2)
  params.nested.name = "Gayatri"
  console.log(params)
  console.log(obj2)
  console.log(obj)
}
xyz2(obj2)
//nested in the obj2 is getting changed because it is not coping the value of obj value inside it, it is referencing it, so when we change the value of nested the value of obj also gets changed

