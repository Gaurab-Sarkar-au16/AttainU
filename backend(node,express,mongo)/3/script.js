//Basics of express
const express = require("express");
const mathRouter = require('./routes/maths')
const userRouter = require('./routes/users')

const app = express();

function logger(request,response,next){
  console.log(`Request came from the client`)
  next()
}

function preprocess(req,res,n){
  console.log(`Pre processing the request`)
  n()
}

// app.use(logger)
// app.use(preprocess)

app.get("/", (req, res) => {
  res.send("Welcome, choose to square or to cube");
});
app.use('/math',preprocess, mathRouter)
app.use('/user', userRouter)

app.listen(3100, () => console.log("server started"));
