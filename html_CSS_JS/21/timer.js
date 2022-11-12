function bhookamp(){
  console.log("Chat is on Fire!!!")
}
//bhoocamp()
// setTimeout(bhookamp, 5000)
setInterval(bhookamp, 5000)

//=================================================

function add(a,b){
  console.log(a+b)
}
setInterval(function(){add(1,5)},2000)

//==================================================
//execute set interval required number of times

var count = 0
var timerid = setInterval(function(){
  if(count<3){
    add(2,5)
    count++
  }else{
    clearInterval(timerid)
  }
},2000)

