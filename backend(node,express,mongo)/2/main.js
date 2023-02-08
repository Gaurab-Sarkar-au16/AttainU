//First way:
const mathOpr = require('./math')

const userInput = 8

const sq = mathOpr.square(userInput)
console.log(sq)

//Second way:
const {cube} = require('./math')

const cubes = mathOpr.cube(userInput)
console.log(cubes)