// //usual way of creating object, dry principle 
// const vijay = {
//   name: "Vijay",
//   age: 24,
//   height: 123
// }

// const josephine = {
//   name: "Josephine",
//   age: 34,
//   height: 123
// }

// //constructor function
// function Person(passedName, passedAge){
//   this.name = passedName
//   this.age = passedAge
// }

// Person.prototype.hello = function(){
//   console.log("Hello")
// }

// // const joseph = new Person("Josh", 34)
// // console.log(joseph)

// function Programmer(passedName, programLang){
//   this.name = passedName
//   this.programmingLang = programLang
// }

// //before es6 classes we used the following method to link constructor functions showing inheritance

// Programmer.prototype = Object.create(Person.prototype)
// Programmer.prototype.constructor = Programmer

// Programmer.prototype.writeCode = function(){
//   console.log(`${this.name} is coding`)
// }

// const prgm = new Programmer('BCD', 'Javascript')
// prgm.hello()
// prgm.writeCode()

//ES6 classes
//**********************

class Person{
  constructor(name, age){
    this.name = name
    this.age = age
  }

  sayHello(){
    console.log(`${this.name} says hello. My age is ${this.age}`)
  }
}

class Programmer extends Person{
  constructor(passedName, passedAge, passedProgLang){
    super(passedName, passedAge)
    this.programmingLang = passedProgLang
  }

  writeCode(){
    console.log(`${this.name} is coding in ${this.programmingLang} and his age is ${this.age}`)
  }
}

const personObj = new Person('Vijay', 28)
//console.log(personObj)
//personObj.sayHello()

const programmerObj = new Programmer('Bob', 45, 'Java')
console.log(programmerObj)
//programmerObj.sayHello()//sayHello is inherited from the person object
//programmerObj.writeCode()

class Vehicle{

  static count = 0

  static myStaticMethod(){
    console.log('This is coming from static method')
  }

  constructor(year, mfg){
    this._year = year
    this._mfg = mfg

    Vehicle.count += 1
  }

  get Year(){
    return this._year
  }

  set Year(newYear){
    this._year = newYear
  }

  get manufacture(){
    return this._mfg
  }

  set manufacture(newMfg){
    this._mfg = newMfg
  }
}

const vehicleObj = new Vehicle(1997, 'Bajaj')
console.log(Vehicle.count)
const vehicleObj1 = new Vehicle(1992, 'TVS')
console.log(Vehicle.count)
const vehicleObj2 = new Vehicle(1995, 'Hero')
console.log(Vehicle.count)

console.log(Vehicle.myStaticMethod());

console.log(vehicleObj)
console.log(vehicleObj.Year)
console.log(vehicleObj.manufacture)