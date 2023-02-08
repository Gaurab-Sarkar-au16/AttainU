//Basics of express
const express = require('express')
const {square,cube} = require('./math')

const app = express()

app.get('/',(req,res)=>{
  res.send('Welcome, choose to square or to cube')
})

app.get('/square/:num', (req,res)=>{
  let {num} = req.params
  num = Number(num)
  const sq = square(num)
  res.send(`${sq}`)
})

app.get('/cube/:num', (req,res)=>{
  let {num} = req.params
  num = Number(num)
  const cu = cube(num)
  res.send(`${cu}`)
})

app.listen(3100,()=>console.log('server started'))