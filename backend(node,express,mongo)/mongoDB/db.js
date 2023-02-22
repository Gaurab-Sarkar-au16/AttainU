const { MongoClient } = require('mongodb')
require('dotenv').config()

let dbConnection
let uri = `mongodb+srv://${process.env.VARIABLE_NAME}:${process.env.MY_API_KEY}@cluster0.ptrvgxl.mongodb.net/?retryWrites=true&w=majority`

module.exports = {
  connectToDb: (cb) => {
    MongoClient.connect(uri)
      .then(client => {
        dbConnection = client.db()
        console.log(uri)
        return cb()
      })
      .catch(err => {
        console.log(err)
        return cb(err)
      })
  },
  getDb: () => dbConnection
}