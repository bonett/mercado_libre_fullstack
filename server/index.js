const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const apiPort = 5000;
const connectionString = "mongodb://mongo:27017/api";
const db = mongoose.connection;
mongoose
  .connect(connectionString, { useNewConnection: true })
  .catch((err) => console.e);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));
