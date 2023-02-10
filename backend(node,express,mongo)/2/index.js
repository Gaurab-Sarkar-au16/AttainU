//Basics of express
const express = require("express");
const mathRouter = require('./routes/maths')
const userRouter = require('./routes/users')

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome, choose to square or to cube");
});
app.use('/math', mathRouter)
app.use('/user', userRouter)

app.listen(3100, () => console.log("server started"));
