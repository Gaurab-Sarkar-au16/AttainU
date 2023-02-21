// Import the MongoDB driver for Node.js
const { MongoClient, ObjectId } = require('mongodb');

// Connection URL and database name
const url = 'mongodb://127.0.0.1:27017';
const dbName = 'bookstore';

// Create a new MongoClient
const client = new MongoClient(url, { useNewUrlParser: true });

// Connect to the MongoDB server
client.connect(function(err) {
  if (err) throw err;
  console.log("Connected successfully to server");

  // Select the database
  const db = client.db(dbName);

  // Get the collection
  const collection = db.collection('books');

  // Find a single document by ID
  const query = { _id: new ObjectId('63f492a3d80d9dfa7914cfb1') };
  collection.findOne(query, function(err, doc) {
    if (err) throw err;

    // Display the document
    console.log(doc);

    // Close the connection
    client.close();
  });
});