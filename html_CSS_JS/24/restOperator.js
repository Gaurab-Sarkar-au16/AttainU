function add(...args){
  console.log(args)
  let sum = 0 
  let sum2 = 0
  args.forEach(item => sum += item)
  //with for loop
  for (let index = 0; index < args.length; index++) {
    sum2 += args[index] 
  }
  console.log(sum)
  console.log('forLoopSum', sum2)
}  

add(10,20,30,40)