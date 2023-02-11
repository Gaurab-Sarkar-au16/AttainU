const express = require("express");
const users = require("./db/user.json");
const fs = require("fs");

const app = express();

app.use(express.static("public"));
app.use(express.json());

app.get("/", (req, res) => {
  // console.log(`html`);
  res.sendFile(__dirname + "/public/home.html");
});

app.post("/signUp", (req, res) => {
  console.log(req.body);

  users.push(req.body);

  res.json({ success: true });
  console.log(users);

  fs.writeFileSync(__dirname + '/db/user.json', JSON.stringify(users, null, 2 ));
});

app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/public/about.html");
});

app.get("/contact", (req, res) => {
  res.sendFile(__dirname + "/public/contact.html");
});

//always put it ib the last
app.get("*", (req, res) => {
  res.sendFile(__dirname + "/public/404.html");
});

process.on("SIGINT", () => {
  console.log("process killed");
  fs.writeFileSync(__dirname + "/db/user.json", JSON.stringify(users, null, 4));
});

app.listen(3100, () => {
  console.log("server started at localhost:3100");
});
