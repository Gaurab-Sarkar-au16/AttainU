const myPromise = new Promise(function(resolve, reject){
  
  setTimeout(function(){
    //fetching some number
    const number = 9
    if(number%2 === 0 ){
      resolve()
    }else{
      reject()
    }
  },5000)

})

myPromise.then(function(){
  console.log('Promise fulfilled')
})

myPromise.catch(function(){
  console.log('Promise rejected')
})

console.log('This is logged immediately')
