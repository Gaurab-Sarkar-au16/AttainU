// without express server creation
// ===================================
// const http = require("http");

// const hostname = "127.0.0.1";
// const port = 3000;

// console.log("Server STARTING");

// const server = http.createServer((req, res) => {
//   if (req.url === "/") {
//     res.statusCode = 200;
//     res.setHeader("Content-type", "text/plain");
//     res.end("This is the home page");
//   } else if (req.url === "/about") {
//     res.end("This is the about page");
//   } else {
//     res.end("404 Page Not Found");
//   }
// });

// server.listen(port, hostname, (err) => {
//   if(err){
//     return console.log(`Error starting the server:`, err)
//   }
//   console.log(`Server is running at http://${hostname}:${port}`);
// });

// server creation with express
// ================================

// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/', (req,res)=>{
//   res.send('This is the home page')
// })

// app.get('/about', (req, res)=>{
//   res.send('This is the about page')
// })

// app.get('*',(req,res)=>{
//   res.send('404 page not found')
// })

// try {
//   app.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}`);
//   });
// } catch (error) {
//   console.error(`Error starting the server: ${error}`);
// }

// file system
// =============
// const fileSystem = require("fs");

// //reading file synchronus
// const textFromFile = fileSystem.readFileSync("./sampleFile.txt", "utf-8");
// console.log(textFromFile);
// //asynchronus
// fileSystem.readFile("./sampleFile.txt", "utf-8", function (err, data) {
//   if (err) {
//     console.log('error occured')
//     console.log(err)
//     return;
//   }
//   console.log(data)
// });

// // writing file synchronus
// const textToWrite = "Everyone was waiting for him andnow he is here."
// fileSystem.writeFileSync('./sampleFile2.txt', textToWrite)
// //asynchronus
// const textToWrite2 = "He has brought the gift of heaven for us."
// fileSystem.writeFile('./sampleFile2.txt', textToWrite2, function(err){
//   if(err) throw err
//   console.log("Finished")
// })

// // appending a file
// fileSystem.appendFile('sampleFile.txt', 'This is an example file.', (err) => {
//   if (err) throw err;
//   console.log('The file has been saved!');
// });

// //delete file
// try {
//   fileSystem.unlinkSync('./sampleFile2.txt')
// } catch (error) {
//   console.log(error)
// }

// Revisit promises
// =================

// const fs = require("fs").promises;

// fs.readFile("./sampleFile.txt", "utf-8").then(function (data) {
//   console.log(data);
// });

// fs.writeFile("test.txt", "This is a test write").then(() =>
//   console.log("Done")
// );

// //another way of writing(with async await)
// async function read() {
//   const data = await fs.readFile("sampleFile.txt", "utf-8");
//   console.log(data);
// }
// read();

// async function write() {
//   try {
//     const data = await fs.writeFile(
//       "test2.txt",
//       "This is coming from async await"
//     );
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }
// write();

//CRUD operation
//Create POST 
//Read GET 
//Update PUT
//Delete DELETE

// const express = require('express')
// const app = express()

// app.use(express.json())

// app.get('/category', (req,res)=>{
//   const {name} = req.query

//   if(name){
//     res.send(`Your name is ${name}`)
//     return
//   }

//   res.send('Works')
// })

// app.post('/userInfo', (req,res)=>{
//   console.log(req.body)
//   // res.send(`Server changed your name to ${req.body.name}, ${req.body.age}`)
//   const newData = {...req.body}
//   newData.appendValue = "Express"
//   console.log(newData)

//   res.json(newData)
// })

// app.listen(3000,()=>console.log('server started'))

//req.query
//req.params
//req.body

