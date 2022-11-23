//usual way of creating object, dry principle 
const vijay = {
  name: "Vijay",
  age: 24,
  height: 123
}

const josephine = {
  name: "Josephine",
  age: 34,
  height: 123
}

//constructor function
function Person(passedName, passedAge){
  this.name = passedName
  this.age = passedAge
}

Person.prototype.hello = function(){
  console.log("Hello")
}

// const joseph = new Person("Josh", 34)
// console.log(joseph)

function Programmer(passedName, programLang){
  this.name = passedName
  this.programmingLang = programLang
}

Programmer.prototype = Object.create(Person.prototype)
Programmer.prototype.constructor = Programmer

Programmer.prototype.writeCode = function(){
  console.log(`${this.name} is coding`)
}

const prgm = new Programmer('BCD', 'Javascript')
prgm.hello()
prgm.writeCode()
