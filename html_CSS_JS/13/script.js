alert('Password is wrong') 

// confirm and prompt returns a value
confirm('are you sure?')
prompt('What is your name?')

var userConfirmed = confirm('are you sure?')
console.log(userConfirmed)

var userInput = prompt('What is your name?')
console.log(userInput)

// Airthmatic operators
/*
 +, -, /, *, **, %, ++, --

 ++(increament operator), --(decreament operator)
*/
var myNumber = 10
console.log(myNumber)
console.log('executing myNumber++')
console.log(myNumber++)//10 post fix

console.log(myNumber)//11
console.log('executing ++myNumber')
console.log(++myNumber)//12 pre fix
console.log(myNumber)//12

//Assignment operators
// =, +=, -=, /=, *=, %=, **=
var abc = 10 + 2 + 11 // abc =23
abc += 10 // abc = abc + 10 // 23 + 10 = 33

// Comparison Operators
// ==, ===, !=, !==, >, <, >=, <=, ?
/*
== : compare only two values/content
=== : compare the values/content AND the data type of that values
*/

//Relation Operators
// <, >, <=, >=

//Logical Operators
//&&(and), ||(or), !(not), ^

//   Conditionals
//===================
//if statements
if (20 > 10){
  console.log('20 is bigger')
}

// if else statements
if (20 > 10) {
  console.log('20 is bigger')
} else {
  console.log('20 is smaller')
}

//nesting of if else
if (condition) {
  if (condition) {
    if (condition) {
      //statement
    }
  }
}

// else if statements
if (condition) {
  
} else if(condition){

} else if(condition){

} else {

}

//comparison operator '?'
(20 > 10) ? console.log('Greater') : console.log('Smaller')
// its like if else statement
// nested like if else nest
(10<100) ? ((20>30) ? (console.log('Greater')):(console.log('Smaller'))) : console.log('its equal') 

//Loops
// for loop
for (var i=0; i <= 10; i++){
  console.log(i)
  
  for (var i=0; i <= 5; i++){
    if (condition) {
      
    }
  }
}

// while loop
var index = 10 
while(index < 100){
  console.log('Small')
  index++
} 
/*
in this loop all the initialisations will be done outside, and all the update we have to do inside the loop
*/

