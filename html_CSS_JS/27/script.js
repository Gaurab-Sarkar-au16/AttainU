const myPromise = new Promise(function(resolve, reject){
  
  setTimeout(function(){
    //fetching some number
    const number = 12
    if(number%2 === 0 ){
      const cubeNumber = cube(number)
      resolve(cubeNumber)
    }else{
      reject()
    }
  },5000)

})

myPromise.then(function(cube){
  console.log('Promise fulfilled')
  console.log(cube)
})

myPromise.catch(function(){
  console.log('Promise rejected')
})

console.log('This is logged immediately')


function cube(num1){
 return num1**3
}