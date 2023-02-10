const express = require('express')
const router = express.Router()
const {default:axios} = require('axios')
const { response } = require('express')

router.get('/users', async(req,res)=>{
  const resObj = await axios.get(`https://jsonplaceholder.typicode.com/users`)

  const thinUsers = resObj.data.map((users)=>{
    delete users.address
    delete users.company
    return users
  })
  res.json(thinUsers)
})

module.exports = router