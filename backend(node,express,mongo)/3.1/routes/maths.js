const express = require('express')
const {square,cube} = require('../math')
const router = express.Router()

function preprocess(req,res,n){
  console.log(`This is coming from router`)
  n()
}

router.use(preprocess)

router.get('/square/:num', (req,res)=>{
  let {num} = req.params
  num = Number(num)
  const sq = square(num)
  res.send(`${sq}`)
})

router.get('/cube/:num', (req,res)=>{
  let {num} = req.params
  num = Number(num)
  const cu = cube(num) 
  res.send(`${cu}`)
})

module.exports = router