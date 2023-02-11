const express = require("express");

const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
  // console.log(`html`);
  res.sendFile(__dirname + "/public/home.html");
});

app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/public/about.html");
});

app.get("/contact", (req, res) => {
  res.sendFile(__dirname + "/public/contact.html");
});

app.listen(3100, () => {
  console.log("server started at localhost:3100");
});
