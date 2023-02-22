const mongoose = require("mongoose");
const User = require("./User");

// mongoose.connect('mongodb://localhost/bookstore',()=>{
//   console.log('connected')
// },(e)=>{
//   console.error(e)
// })

mongoose.connect("mongodb://127.0.0.1/testdb");

mongoose.set("strictQuery", false);

//simple data insertion
//======================
// const user = new User({name:"Vijay", age:29})
// user.save().then(()=>{
//   console.log("user saved")
// })

// run();
// async function run() {
//   const user = await User.create({ name: "Vijay", age: 29 })
//   //changing user name
//   user.name = "Sally"
//   await user.save()
//   // const user = new User({ name: "Vijay", age: 29 });
//   // await user.save();
//   console.log(user);
// }

//complex data insertion
//======================
// run();
// async function run() {
//   try {
//     const user = await User.create({
//       name: "Shraddha",
//       age: 28,
//       email:"TEST@gmail.com",
//       hobbies: ["Meditation", "Reading books"],
//       address: {
//         street: "Main St",
//       },
//     });
//     console.log(user);
//   } catch (e) {
//     console.log(e.message);
//   }
// }

//different queries
//=================
run();
async function run() {
  try {
    // const user = await User.findById("63f6436f37225ba1e933a60b")
    // const user = await User.find({name:"Vijay"})
    // const user = await User.findOne({name:"Vijay"})
    // const user = await User.exists({name:"Vijay"})
    // await User.deleteOne({name:"Vijay"})
    // await User.deleteMany({name:"Vijay"})

    //custom made mongoose query
    // const user = await User.where("name").equals("Vijay")
    // const user = await User.where("age").gt("12")
    // const user = await User.where("age").gt("12").where("name").equals("Vijay")
    // const user = await User.where("age").gt("12").lt("31").where("name").equals("Vijay")
    const user = await User.where("age")
      .gt("12")
      .where("name")
      .equals("Shraddha")
      .populate("bestFriend")
      .limit(1);
    // user[0].bestFriend = "63f656405523fb922c392530"
    // await user[0].save()
    console.log(user);
  } catch (e) {
    console.log(e.message);
  }
}
