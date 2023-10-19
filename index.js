const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { MongoClient, ServerApiVersion } = require("mongodb");

const app = express();
const port = process.env.PORT || 4000;

// middleware
app.use(cors());
app.use(express.json());

// driveWave
// S7pGkXZhn2tERbYP

const uri =
  "mongodb+srv://driveWave:S7pGkXZhn2tERbYP@cluster0.ufgx0zu.mongodb.net/?retryWrites=true&w=majority";

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
    const allProductsDoc = [
      {
        image: "https://i.ibb.co/C5gn7xS/Toyota-Camry.jpg",
        name: "Toyota Camry",
        brandName: "Toyota",
        type: "car",
        price: 30000,
        shortDescription: "A reliable and fuel-efficient sedan.",
        rating: 4.5,
        buttonText: "Add to Cart",
      },
      {
        image: "https://i.ibb.co/fCp45QG/Toyota-4-Runner.jpg",
        name: "Toyota 4Runner",
        brandName: "Toyota",
        type: "jeep",
        price: 40000,
        shortDescription: "An off-road adventure companion.",
        rating: 4.0,
        buttonText: "Add to Cart",
      },
      {
        image: "https://i.ibb.co/G0J7Pjz/Toyota-Land-Cruiser.jpg",
        name: "Toyota Land Cruiser",
        brandName: "Toyota",
        type: "jeep",
        price: 35000,
        shortDescription: "Spacious and versatile jeep.",
        rating: 4.2,
        buttonText: "Add to Cart",
      },
      {
        image: "https://i.ibb.co/1RVzT2j/Toyota-Tacoma.jpg",
        name: "Toyota Tacoma",
        brandName: "Toyota",
        type: "truck",
        price: 45000,
        shortDescription: "A powerful and reliable pickup truck.",
        rating: 4.4,
        buttonText: "Add to Cart",
      },
      {
        image: "https://i.ibb.co/KhCbgXj/ford-fusion.jpg",
        name: "Ford Fusion",
        brandName: "Ford",
        type: "car",
        price: 32000,
        shortDescription: "A comfortable and stylish sedan.",
        rating: 4.3,
        buttonText: "Add to Cart",
      },
      {
        image: "https://i.ibb.co/k15qkMK/Ford-Mustang.jpg",
        name: "Ford Mustang",
        brandName: "Ford",
        type: "car",
        price: 42000,
        shortDescription: "A rugged and versatile off-road vehicle.",
        rating: 4.1,
        buttonText: "Add to Cart",
      },
      {
        image: "https://i.ibb.co/wM8gVfB/Ford-Escape.jpg",
        name: "Ford Escape",
        brandName: "Ford",
        type: "SUV",
        price: 37000,
        shortDescription: "An SUV designed for family adventures.",
        rating: 4.2,
        buttonText: "Add to Cart",
      },
      {
        image: "https://i.ibb.co/5nb36Zs/Ford-F-150.jpg",
        name: "Ford F-150",
        brandName: "Ford",
        type: "truck",
        price: 48000,
        shortDescription: "A reliable and powerful pickup truck.",
        rating: 4.4,
        buttonText: "Add to Cart",
      },
      {
        image: "https://i.ibb.co/h7432HJ/BMW-3-Series-Convertible.jpg",
        name: "BMW 3 Series Convertible",
        brandName: "BMW",
        type: "car",
        price: 48000,
        shortDescription: "Experience open-top luxury and performance.",
        rating: 4.8,
      },
      {
        image: "https://i.ibb.co/JpZGPGW/BMW-5-Series-Sedan.jpg",
        name: "BMW 5 Series Sedan",
        brandName: "BMW",
        type: "car",
        price: 55000,
        shortDescription: "Elegance and cutting-edge technology in a sedan.",
        rating: 4.9,
      },
      {
        image: "https://i.ibb.co/ZKGLGRn/BMW-M5-Competition.jpg",
        name: "BMW M5 Competition",
        brandName: "BMW",
        type: "car",
        price: 72000,
        shortDescription: "A high-performance luxury sedan for enthusiasts.",
        rating: 4.9,
      },
      {
        image: "https://i.ibb.co/wyJdqJs/BMW-7-Series-Sedan.jpg",
        name: "BMW 7 Series Sedan",
        brandName: "BMW",
        type: "car",
        price: 80000,
        shortDescription: "The pinnacle of BMW luxury and innovation.",
        rating: 5.0,
      },
      {
        image: "https://i.ibb.co/SPwW9sX/Mercedes-Benz-C-Class.jpg",
        name: "Mercedes-Benz C-Class",
        brandName: "Mercedes-Benz",
        type: "car",
        price: 50000,
        shortDescription:
          "A luxury compact sedan with cutting-edge technology.",
        rating: 4.7,
      },
      {
        image: "https://i.ibb.co/0sq5Rkp/Mercedes-Benz-CLA-Class.jpg",
        name: "Mercedes-Benz CLA-Class",
        brandName: "Mercedes-Benz",
        type: "car",
        price: 60000,
        shortDescription:
          "A midsize luxury sedan known for its elegance and performance.",
        rating: 4.8,
      },
      {
        image: "https://i.ibb.co/n6s1R7s/Mercedes-Benz-E-Class.jpg",
        name: "Mercedes-Benz E-Class",
        brandName: "Mercedes-Benz",
        type: "car",
        price: 65000,
        shortDescription:
          "A premium midsize SUV with a blend of comfort and capability.",
        rating: 4.6,
      },
      {
        image: "https://i.ibb.co/vz8VwsZ/Mercedes-Benz-GLC.jpg",
        name: "Mercedes-Benz GLC",
        brandName: "Mercedes-Benz",
        type: "SUV",
        price: 55000,
        shortDescription:
          "A compact luxury SUV designed for versatility and style.",
        rating: 4.5,
      },
      {
        image: "https://i.ibb.co/8jzXZws/Tesla-Model-3.jpg",
        name: "Tesla Model 3",
        brandName: "Tesla",
        type: "car",
        price: 45000,
        shortDescription:
          "A popular electric sedan with cutting-edge technology.",
        rating: 4.8,
      },
      {
        image: "https://i.ibb.co/rZzJBY7/Tesla-Model-Y.jpg",
        name: "Tesla Model Y",
        brandName: "Tesla",
        type: "car",
        price: 52000,
        shortDescription: "A compact electric SUV designed for the future.",
        rating: 4.7,
      },
      {
        image: "https://i.ibb.co/pLBXt3v/tesla-x.jpg",
        name: "Tesla Model X",
        brandName: "Tesla",
        type: "SUV",
        price: 80000,
        shortDescription:
          "An all-electric SUV with distinctive features and performance.",
        rating: 4.6,
      },
      {
        image: "https://i.ibb.co/SPLdr6W/Tesla-Model-S.jpg",
        name: "Tesla Model S",
        brandName: "Tesla",
        type: "car",
        price: 75000,
        shortDescription:
          "A luxury electric sedan with impressive acceleration.",
        rating: 4.9,
      },
    ];

    app.get("/allProducts", async (req, res) => {
      const result = await allBrandsProductsCollection.find().toArray();
      res.send(result);
    });

    app.post("/allProducts", async (req, res) => {
      const product = req.body;
      const result = await allBrandsProductsCollection.insertOne(product);
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
