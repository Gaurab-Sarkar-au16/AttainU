//======================================
//1st example
// main program
console.log(dummy)
function x() { 
}
function y() { 
}
var dummy = 10

// first parse by javascript
var dummy
function x() { 
}
function y() { 
}
console.log(dummy)
dummy = 10
// javascript raises or hoists all the declarations and functions at the top
// this will give a reslt undefined

//======================================
//2nd example
declaration(2,3)
expression(8,9)

function declaration(a,b){
  console.log(a+b)
}

var expression = function(a,b){
  console.log(a,b)
}

// 1st pass
var expression
function declaration(a,b){
  console.log(a+b)
}

declaration(2,3)
expression(8,9)

expression = function(a,b){
  console.log(a+b)
}


