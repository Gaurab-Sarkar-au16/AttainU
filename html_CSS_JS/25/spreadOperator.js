const obj = {
  keyA: "Value1",
  keyB: "Value1"
}

const obj2 = {
  keyC: "Value3",
  keyD: "Value4",
  nested: {
    abc: 'ASD'
  }
}

const joinedObj = {
  keyE:'value5',
  ...obj,
  ...obj2
}

console.log('Object',joinedObj)

//===================================
//using with arrays

const arr1 = [1,2,3]
const arr2 = [4,5,6]

const arr3 = [-1,-2,0,...arr1, ...arr2]

console.log('Array',arr3)

const str = 'This is a class'
const arr4 = [...str]
console.log(arr4)//create array of letters in the string