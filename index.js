const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

const app = express();
const port = process.env.PORT || 4000;

// middleware
app.use(cors());
app.use(express.json());

// driveWave
// S7pGkXZhn2tERbYP

// const uri =
//   "mongodb+srv://driveWave:S7pGkXZhn2tERbYP@cluster0.ufgx0zu.mongodb.net/?retryWrites=true&w=majority";
const uri =
  "mongodb://driveWave:S7pGkXZhn2tERbYP@ac-scj1kyz-shard-00-00.ufgx0zu.mongodb.net:27017,ac-scj1kyz-shard-00-01.ufgx0zu.mongodb.net:27017,ac-scj1kyz-shard-00-02.ufgx0zu.mongodb.net:27017/?ssl=true&replicaSet=atlas-ts3tkk-shard-0&authSource=admin&retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const allBrandsProductsCollection = client
      .db("allBrandsProductsDB")
      .collection("allProducts");
    const cartCollection = client.db("cartDB").collection("cart");

    // read products from database
    app.get("/allProducts", async (req, res) => {
      const result = await allBrandsProductsCollection.find().toArray();
      res.send(result);
    });

    // read single product from database
    app.get("/products/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await allBrandsProductsCollection.findOne(query);
      res.send(result);
    });

    // send product data to database
    app.post("/allProducts", async (req, res) => {
      const product = req.body;
      const result = await allBrandsProductsCollection.insertOne(product);
      res.send(result);
    });

    // cart
    app.get("/cart", async (req, res) => {
      const result = await cartCollection.find().toArray();
      res.send(result);
    });

    // delete from cart
    app.delete("/cart/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: id };
      const result = await cartCollection.deleteOne(query);
      res.send(result);
    });

    // send cart data to database
    app.post("/cart", async (req, res) => {
      const cart = req.body;
      const result = await cartCollection.insertOne(cart);
      res.send(result);
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("DriveWave's SERVER SITE IS RUNNING");
});

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
