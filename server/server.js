const express = require("express");
const app = express();
const cors = require("cors");

const itemsRouter = require("./src/routes/items");

app.set("port", process.env.PORT || 5000);
app.use(cors());
app.use(express.json());
app.use("/items", itemsRouter);

app.listen(app.get("port"), () =>
  console.log(`Server running on port ${app.get("port")}`)
);
