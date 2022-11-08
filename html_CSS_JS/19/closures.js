function addCreator(callback){
  
  callback()
  function add(a,b){
    console.log(a+b)
  }

  return add
  // return add()
}

function subtract(){
  console.log('Subtract')
}

var plus = addCreator(subtract)
console.log(plus)
plus(10,20)
