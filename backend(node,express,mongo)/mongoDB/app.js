const express = require("express");
const { ObjectId } = require("mongodb");
const { getDb, connectToDb } = require("./db");

// init app & middleware
const app = express();
app.use(express.json());

// db connection
let db;

connectToDb((err) => {
  if (!err) {
    app.listen("3000", () => {
      console.log("app listening on port 3000");
    });
    db = getDb();
  }
});

// routes
app.get("/books", (req, res) => {
  let books = [];

  db.collection("books")
    .find()
    .sort({ author: 1 })
    .forEach((book) => books.push(book))
    .then(() => {
      // console.log(books)
      res.status(200).json(books);
    })
    .catch(() => {
      res.status(500).json({ error: "Could not fetch the documents" });
    });
});

app.get("/books/:id", (req, res) => {
  if (ObjectId.isValid(req.params.id)) {
    const query = { _id: new ObjectId(req.params.id) };
    db.collection("books")
      .findOne(query)
      .then((doc) => {
        res.status(200).json(doc);
      })
      .catch((err) => {
        res.status(500).json({ Error: "Could not fetch document" });
      });
  } else {
    res.status(500).json({ error: "Not a valid id" });
  }
});

app.post("/books", (req, res) => {
  const book = req.body;

  db.collection("books")
    .insertOne(book)
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      res.status(500).json({ err: "Could not create a new document" });
    });
});

app.delete("/books/:id", (req, res) => {
  if (ObjectId.isValid(req.params.id)) {
    const query = { _id: new ObjectId(req.params.id) };
    db.collection("books")
      .deleteOne(query)
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((err) => {
        res.status(500).json({ Error: "Could not delete document" });
      });
  } else {
    res.status(500).json({ error: "Not a valid id" });
  }
});

app.patch("/books/:id", (req, res) => {
  const update = req.body;

  if (ObjectId.isValid(req.params.id)) {
    const query = { _id: new ObjectId(req.params.id) };
    db.collection("books")
      .updateOne(query, { $set: update })
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((err) => {
        res.status(500).json({ Error: "Could not update document" });
      });
  } else {
    res.status(500).json({ error: "Not a valid id" });
  }
});
