const express = require("express");
const app = express();
const cors = require("cors");

const itemsRouter = require("./src/routes/items");
const apiPort = 5000;

app.use(cors());
app.use(express.json());
app.use("/items", itemsRouter);

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));
