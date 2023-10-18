const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("DriveWave's SERVER SITE IS RUNNING");
});

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
