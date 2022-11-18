const express = require("express");
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 5000;

// Creating express app
const app = express();

// Creating middlewares
app.use(cors());
app.use(express.json());

// Connect to mongodb for digial krishi khamar
const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = `mongodb+srv://db_user_pritam:${process.env.DB_PASS}@cluster0.xrzq7vz.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
client.connect((err) => {
  const collection = client.db("test").collection("devices");
  console.log("Adhunik krishi khamar db connected");
  // perform actions on the collection object
  client.close();
});

// Simple  get request for testing
app.get("/", (req, res) => {
  res.send(`Sever is  running on port ${port}`);
});

// Listening the app  on port -5000
app.listen(port, () => {
  console.log(`Listening  the app  on port ${port}`);
});
