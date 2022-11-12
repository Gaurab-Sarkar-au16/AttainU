// var outer = 2
// function xyz(){
//   var innvar1 = 10
//   var innvar2 = 'my string'
//   function increase(){
//     innvar1++
//     console.log(innvar1)
//     console.log(outer)
//   }
//   console.log(innvar2)
//   return increase
// }

// var fn = xyz()
// fn()

// ===================================

// function x(){
//   var text = "25"
//   return function(){
//     return function(){
//       text + "100"
//       console.log(text)
//     }
//   }
// }

// x()()()

//================================

// Application of closure

// unsecure way
//**************
// var card_number = "46589756452"
// function pay(){
//   //logic to complete payment
//   console.log("Payment Completed wih card number" + card_number)
// }
// pay()

//secure way
//***********
//IIFE 
var app = (function(){
  var card_number = "46589756452"

  function pay(){
    startPayment()
    console.log("Payment completed with card number" + card_number)    
  }

  //private function
  function startPayment(){
    console.log("Payment started with card number" + card_number) 
  }

  // return pay

  // return{
  //   pay: pay,
  //   startPayment: startPayment
  // }

  return { pay: pay }
})()


