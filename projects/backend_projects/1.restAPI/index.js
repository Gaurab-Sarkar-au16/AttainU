import express from "express"
// const express = require('express')

import usersRoutes from './routes/users.js'

const app = express()
const PORT = 5000

app.use(express.json())

app.get('/',(req,res)=>{
    res.send(`Hello from home page.
    <h1>These are the links you can add to the given url</h1>
    <h3>/users : will give you all users</h3>
    <h3>/users/id : will give single user</h3>

    Other requests can be made from a api tester like POSTMAN app
    `)
})

app.use('/users', usersRoutes)

app.listen(PORT, () => console.log(`Server Running on port: http://localhost:${PORT}`))


